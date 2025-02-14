from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('update/', ProfileUpdate.as_view(), name='pet-update'),
    path('list/', ProfileList.as_view(), name='pet-list'),
    
]