from django.urls import path, include
from rest_framework import routers

from .views import *

router = routers.DefaultRouter()
router.register(r"staff", StaffViewSet, basename='staff')
router.register(r"item-request", ItemRequestViewSet, basename='item-request')
router.register(r"vehicle-request", VehicleRequestViewSet, basename='vehicle-request')
router.register(r"inventory-checklist", InventoryChecklistViewSet, basename='inventory-checklist')
router.register(r"activity-log", ActivityLogViewSet, basename='activity-log')
router.register(r"facility", FacilityViewSet, basename='facility')

urlpatterns = [
    path('', include(router.urls))
]