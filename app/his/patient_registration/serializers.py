from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import PatientInformation, PatientHMO

User = get_user_model()


class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'first_name', 'last_name']

class HMOSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientHMO
        fields = ['insurance_name', 'member_number']


class PatientInformationSerializer(serializers.ModelSerializer):
    
    patient = PatientSerializer()
    hmo = HMOSerializer(source="patienthmo_set", many=True)

    class Meta:
        model = PatientInformation
        fields = '__all__'
      
    def create(self, validated_data):
        patient = validated_data.pop('patient', '')
        user = User.objects.create_user(
            username=patient['email'], 
            email=patient['email'], 
            first_name=patient['first_name'],
            last_name=patient['last_name'],
            password=f"{patient['email']}.{patient['last_name']}"
        )
        patient_information = PatientInformation.objects.create(patient=user)
        hmo_list = validated_data.pop('patienthmo_set', [])
        list_of_hmo = []
        for hmo in hmo_list:
            PatientHMO.objects.get_or_create(
                insurance_name=hmo['insurance_name'],
                member_number=hmo['member_number'],
                patient=patient_information
            )

        return patient_information 

    def update(self, instance):


    def delete(self):
        instance = self.instance
        user = self.context['request'].user
        instance.cancelled = True
        instance.deleted_by = user
        instance.save()
        return instance
