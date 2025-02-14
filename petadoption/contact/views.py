from django.shortcuts import render

# Create your views here.
from .models import ContacUs
from .serializers import ContacUsSerializer
from rest_framework import generics, permissions



class ContacUsCreate(generics.CreateAPIView):
    queryset = ContacUs.objects.all()
    serializer_class = ContacUsSerializer
    permission_classes = [permissions.AllowAny]
