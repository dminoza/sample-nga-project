from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.
class EmergencyRoom(models.Model):
    patient = models.ForeignKey(User, related_name='patient', on_delete=models.PROTECT)
    nurse = models.ForeignKey(User, related_name='nurse',on_delete=models.PROTECT)
    admitted_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.patient} - {self.nurse}"

    
