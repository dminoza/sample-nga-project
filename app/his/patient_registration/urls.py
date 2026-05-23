from django.urls import path

from .views import PatientInformationListCreateAPIView, PatientInformationRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('', PatientInformationListCreateAPIView.as_view(), name="patient-list-create"),
    path('<uuid:pk>/', PatientInformationRetrieveUpdateDestroyAPIView.as_view(), name="patient-retrieve-update-destroy"),
]
