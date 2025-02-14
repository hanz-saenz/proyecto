from rest_framework import serializers
from .models import Profile
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email']  # Limita a los campos necesarios

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()  # Esto incluye el UserSerializer en el perfil

    class Meta:
        model = Profile
        fields = ['phone_number', 'description', 'profession', 'user']  