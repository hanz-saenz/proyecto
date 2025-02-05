from django.shortcuts import render
from .models import Pet
from .serializers import PetSerializer
from rest_framework import generics
# Create your views here.


class PetList(generics.ListCreateAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer