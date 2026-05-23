import uuid

from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


# Create your models here.


class PatientInformation(models.Model):
    pid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    patient = models.ForeignKey(User, on_delete=models.PROTECT)
    #address = models.TextField(null=True)
    cancelled = models.BooleanField(default=False)
    deleted_by = models.ForeignKey(User, related_name="deleted_by", on_delete=models.PROTECT, null=True)

    class Meta:
        db_table = 'patient_information'
    
    def __str__(self):
        return f"{self.patient}"


class PatientHMO(models.Model):
    insurance_name = models.CharField(max_length=255)
    member_number = models.CharField(max_length=255)
    patient = models.ForeignKey(PatientInformation, on_delete=models.PROTECT)
