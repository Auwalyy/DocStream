from django.contrib.auth.backends import BaseBackend
from management.models import Staff
from .models import User


class StaffAuthBackend(BaseBackend):
    """
    Authenticate using staff_id, department, email combination
    """
    def authenticate(self, request, staff_id=None, department=None, email=None, password=None):
        try:
            # Find staff with all three credentials
            staff = Staff.objects.get(
                staff_id=staff_id,
                department=department,
                email=email
            )
            
            # Get associated user
            user = User.objects.get(staff=staff)
            
            # Check password
            if user.check_password(password):
                return user
        except (Staff.DoesNotExist, User.DoesNotExist):
            return None
        
        return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None