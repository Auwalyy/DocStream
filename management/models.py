from django.db import models

# Create your models here.
class Staff(models.Model):
    STATUS_CHOICES = (
        ('active', 'Active'),
        ('inactive', 'Inactive')
    )
    name = models.CharField(max_length=255)
    department = models.CharField(max_length=255)
    role = models.CharField(max_length=30)
    status = models.CharField(max_length=30, choices=STATUS_CHOICES, default='active')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class ItemRequest(models.Model):
    items = models.JSONField()
    created_by = models.ForeignKey(Staff, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class VehicleRequest(models.Model):
    name = models.CharField(max_length=255)
    divison = models.CharField(max_length=255)
    vehicle_type = models.CharField(max_length=255)
    purpose = models.CharField(max_length=255)
    destination = models.CharField(max_length=255)
    departure_date = models.DateField()
    return_date = models.DateField()
    duration_of_trip = models.IntegerField()
    division_head_approval = models.BooleanField(default=False)
    corporate_service_approval = models.BooleanField(default=False)
    logistics_officer_approval = models.BooleanField(default=False)
    created_by = models.ForeignKey(Staff, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class InventoryChecklist(models.Model):
    retail_outlet = models.CharField(max_length=255)
    retail_outlet_address = models.CharField()
    pms_opening = models.IntegerField()
    product_recieved = models.IntegerField()
    price_range = models.FloatField()
    pump_dispensing_level = models.IntegerField()
    created_by = models.ForeignKey(Staff, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class ActivityLog(models.Model):
    activity = models.CharField()
    created_by = models.ForeignKey(Staff, on_delete=models.DO_NOTHING)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Facility(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField()
    serial_no = models.CharField(max_length=255)
    take_over = models.CharField(default='Nill', null=True)