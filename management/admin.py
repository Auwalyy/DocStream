from django.contrib import admin
from .models import *


# Register your models here.
@admin.register(Staff)
class StaffAdmin(admin.ModelAdmin):
    list_display = ('name', 'department', 'role', 'status')

@admin.register(ItemRequest)
class ItemRequestAdmin(admin.ModelAdmin):
    list_display = ('id', 'created_by', 'created_at')

@admin.register(VehicleRequest)
class VehicleRequestAdmin(admin.ModelAdmin):
    list_display = ('id', 'created_by', 'divison', 'purpose', 'created_at')

@admin.register(InventoryChecklist)
class InventoryChecklistAdmin(admin.ModelAdmin):
    list_display = ('id', 'retail_outlet', 'retail_outlet_address', 'pms_opening', 'product_recieved', 'price_range', 'pump_dispensing_level', 'created_at')

@admin.register(ActivityLog)
class ActivityLogAdmin(admin.ModelAdmin):
    list_display = ('id', 'activity', 'created_by', 'created_at')

@admin.register(Facility)
class FacilityAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'serial_no', 'take_over')