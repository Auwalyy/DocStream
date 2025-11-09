from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('register/', views.register_staff_view, name='register'),
    path('profile/', views.user_profile_view, name='profile'),
    path('logout/', views.logout_view, name='logout'),
]