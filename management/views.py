from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets

class StaffViewSet(viewsets.ModelViewSet):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer

class ItemRequestViewSet(viewsets.ModelViewSet):
    queryset = ItemRequest.objects.all()
    serializer_class = ItemRequestSerializer

class VehicleRequestViewSet(viewsets.ModelViewSet):
    queryset = VehicleRequest.objects.all()
    serializer_class = VehicleRequestSerializer

class InventoryChecklistViewSet(viewsets.ModelViewSet):
    queryset = InventoryChecklist.objects.all()
    serializer_class = InventoryChecklistSerializer

class ActivityLogViewSet(viewsets.ModelViewSet):
    queryset = ActivityLog.objects.all()
    serializer_class = ActivityLogSerializer

class FacilityViewSet(viewsets.ModelViewSet):
    queryset = Facility.objects.all()
    serializer_class = FacilitySerializer
