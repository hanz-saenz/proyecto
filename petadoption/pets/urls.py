from django.contrib import admin
from django.urls import path
from .views import PetDelete, PetList, PetCreate, create_pet, UserInfoView, PetUpdate
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('pets/', PetList.as_view(), name='pet-list'),
    path('pet/create/', PetCreate.as_view(), name='pet-create'),
    # path('pet/create/', create_pet, name='pet-create'),
    path('user/', UserInfoView.as_view(), name='user-info'),
    path('pets/update/<int:pk>/', PetUpdate.as_view(), name='pet-update'),
    path('pets/delete/<int:pk>/', PetDelete.as_view(), name='pet-delete'),


    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]