from django.urls import path, include

urlpatterns = [
    path('', include('app.users.urls')),
    path('patient-registration/', include('app.his.patient_registration.urls')),
]
