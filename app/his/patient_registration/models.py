import uuid

from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


# Create your models here.
class PatientInformation(models.Model):
    pid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    patient = models.ForeignKey(User, on_delete=models.PROTECT)
    address = models.TextField(null=True)

    class Meta:
        db_table = 'patient_information'

