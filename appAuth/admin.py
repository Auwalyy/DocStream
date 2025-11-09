from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django import forms
from .models import User
from management.models import Staff


class UserCreationForm(forms.ModelForm):
    """Form for creating new users"""
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Password confirmation', widget=forms.PasswordInput)
    
    class Meta:
        model = User
        fields = ('email', 'staff')
    
    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords don't match")
        return password2
    
    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user


class UserChangeForm(forms.ModelForm):
    """Form for updating users"""
    password = ReadOnlyPasswordHashField(
        label="Password",
        help_text="Raw passwords are not stored. Use <a href=\"../password/\">this form</a> to change password."
    )
    
    class Meta:
        model = User
        fields = ('email', 'password', 'staff', 'is_active', 'is_admin', 'is_staff', 'is_superuser')


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm
    
    list_display = ('email', 'get_staff_id', 'get_name', 'get_department', 'is_active', 'is_admin', 'is_staff')
    list_filter = ('is_active', 'is_admin', 'is_staff', 'is_superuser')
    
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Staff Information', {'fields': ('staff',)}),
        ('Permissions', {'fields': ('is_active', 'is_admin', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'created_at')}),
    )
    
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'staff', 'password1', 'password2', 'is_active', 'is_admin', 'is_staff', 'is_superuser'),
        }),
    )
    
    readonly_fields = ('created_at', 'last_login')
    search_fields = ('email', 'staff__staff_id', 'staff__name')
    ordering = ('email',)
    filter_horizontal = ('groups', 'user_permissions')
    
    def get_staff_id(self, obj):
        # FIX: Check if staff exists before accessing staff_id
        return obj.staff.staff_id if obj.staff else 'N/A'
    get_staff_id.short_description = 'Staff ID'
    get_staff_id.admin_order_field = 'staff__staff_id'  # Allows column sorting
    
    def get_name(self, obj):
        # FIX: Check if staff exists before accessing name
        return obj.staff.name if obj.staff else 'N/A'
    get_name.short_description = 'Name'
    get_name.admin_order_field = 'staff__name'  # Allows column sorting
    
    def get_department(self, obj):
        # FIX: Check if staff exists before accessing department
        return obj.staff.department if obj.staff else 'N/A'
    get_department.short_description = 'Department'
    get_department.admin_order_field = 'staff__department'  # Allows column sorting
    
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "staff":
            # Show only staff that don't have a user account yet, OR the current staff if editing
            existing_user_staff_ids = User.objects.exclude(
                staff__isnull=True
            ).values_list('staff_id', flat=True)
            
            kwargs["queryset"] = Staff.objects.filter(status='active')
            
        return super().formfield_for_foreignkey(db_field, request, **kwargs)