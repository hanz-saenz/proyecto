from rest_framework import serializers
from .models import ContacUs


class ContacUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContacUs
        fields = '__all__'