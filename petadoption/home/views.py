from django.shortcuts import render

# Create your views here.
from .models import Footer
from .serializers import FooterSerializer
from rest_framework import generics


class FooterList(generics.ListCreateAPIView):
    queryset = Footer.objects.all()
    serializer_class = FooterSerializer