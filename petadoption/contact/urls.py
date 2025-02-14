from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('new/', ContacUsCreate.as_view(), name='contact-create'),
]