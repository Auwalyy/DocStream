from rest_framework import serializers
from .models import *

class StaffSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Staff
        fields = "__all__"

class ItemRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemRequest
        fields = "__all__"

class VehicleRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = VehicleRequest
        fields = "__all__"

class InventoryChecklistSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventoryChecklist
        fields = "__all__"

class ActivityLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActivityLog
        fields = "__all__"

class FacilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Facility
        fields = "__all__"
