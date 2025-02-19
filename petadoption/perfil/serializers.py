from rest_framework import serializers
from .models import Profile
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email']  # Limita a los campos necesarios

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()  # Esto incluye el UserSerializer en el perfil

    class Meta:
        model = Profile
        fields = ['phone_number', 'description', 'profession', 'user']  


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)

