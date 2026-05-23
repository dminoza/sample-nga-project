from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

from .models import PatientInformation
from .serializers import PatientInformationSerializer
from .paginations import StandardPagination
from core.permissions import AdminLangNiPuede 

# Create your views here.
class PatientInformationListCreateAPIView(ListCreateAPIView):
    queryset = PatientInformation.objects.all()
    serializer_class = PatientInformationSerializer
    pagination_class = StandardPagination
    #permission_classes = [IsAuthenticated, AdminLangNiPuede]

class PatientInformationRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = PatientInformation.objects.all()
    serializer_class = PatientInformationSerializer
    permission_classes = [IsAuthenticated, AdminLangNiPuede]

    def perform_destroy(self, instance):
        serializer = self.get_serializer(instance)
        serializer.delete()
