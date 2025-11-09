from rest_framework import serializers
from .models import User
from management.models import Staff


class StaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = ['staff_id', 'name', 'email', 'department', 'role', 'status', 'created_at']
        read_only_fields = ['created_at']


class UserSerializer(serializers.ModelSerializer):
    staff_id = serializers.CharField(source='staff.staff_id', read_only=True)
    name = serializers.CharField(source='staff.name', read_only=True)
    email = serializers.EmailField(source='staff.email', read_only=True)
    department = serializers.CharField(source='staff.department', read_only=True)
    role = serializers.CharField(source='staff.role', read_only=True)
    status = serializers.CharField(source='staff.status', read_only=True)
    
    class Meta:
        model = User
        fields = ['staff_id', 'name', 'email', 'department', 'role', 'status', 'is_active', 'created_at']
        read_only_fields = ['created_at']


class LoginSerializer(serializers.Serializer):
    staff_id = serializers.CharField()
    department = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        staff_id = data.get('staff_id')
        department = data.get('department')
        email = data.get('email')
        password = data.get('password')

        if not all([staff_id, department, email, password]):
            raise serializers.ValidationError('All fields are required')

        # Find staff with matching credentials
        try:
            staff = Staff.objects.get(
                staff_id=staff_id,
                department=department,
                email=email
            )
        except Staff.DoesNotExist:
            raise serializers.ValidationError('Invalid credentials')

        # Check if user account exists for this staff
        try:
            user = staff.user
        except User.DoesNotExist:
            raise serializers.ValidationError('No user account found for this staff member')

        # Check password
        if not user.check_password(password):
            raise serializers.ValidationError('Invalid credentials')

        # Check if staff is active
        if staff.status != 'active':
            raise serializers.ValidationError('Staff account is inactive')

        if not user.is_active:
            raise serializers.ValidationError('User account is disabled')

        data['user'] = user
        return data


class RegisterStaffSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    department = serializers.CharField(max_length=255)
    role = serializers.CharField(max_length=30)
    email = serializers.EmailField()
    staff_id = serializers.CharField(max_length=255)
    password = serializers.CharField(write_only=True, min_length=6)

    def validate_email(self, value):
        if Staff.objects.filter(email=value).exists():
            raise serializers.ValidationError('Email already exists')
        return value

    def validate_staff_id(self, value):
        if Staff.objects.filter(staff_id=value).exists():
            raise serializers.ValidationError('Staff ID already exists')
        return value

    def create(self, validated_data):
        password = validated_data.pop('password')
        
        # Create Staff record with all information
        staff = Staff.objects.create(
            staff_id=validated_data['staff_id'],
            name=validated_data['name'],
            email=validated_data['email'],
            department=validated_data['department'],
            role=validated_data['role'],
            status='active'
        )

        # Create User record linked to staff
        # FIX: Pass email as first argument, then password, then staff
        user = User.objects.create_user(
            email=validated_data['email'],
            password=password,
            staff=staff
        )

        return user