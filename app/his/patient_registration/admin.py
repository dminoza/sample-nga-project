from django.contrib import admin

from .models import PatientInformation, PatientHMO
# Register your models here.
admin.site.register(PatientInformation)
admin.site.register(PatientHMO)
