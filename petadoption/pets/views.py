from django.shortcuts import render
from .models import Pet
from .serializers import PetSerializer
from rest_framework import generics, permissions
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.exceptions import PermissionDenied
from rest_framework.response import Response
# Create your views here.

class IsAdmin(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.user.groups.filter(name='Administrador').exists()

class PetList(generics.ListCreateAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer

    def post(self, request, *args, **kwargs):

        serializer = PetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
        

    # def perform_create(self, serializer):
    #     if not self.request.user.groups.filter(name='Administrador').exists():
    #         raise PermissionDenied("Deber ser administrador para ingresar a este funcion")


## permisos

class PetCreate(APIView):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer
    permissions_classes = [permissions.AllowAny ,IsAdmin]

    def perform_create(self, serializer):
        if not self.request.user.groups.filter(name='Administrador').exists():
            raise PermissionDenied("Deber ser administrador para ingresar a este funcion")


class PetUpdate(generics.UpdateAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer

    def put(self, request, *args, **kwargs):
        # print('request.data', request.data)
        serializer = PetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@csrf_exempt
def create_pet(request):
    if request.method == 'POST':
        print('request', request.POST)


class UserInfoView(APIView):
    permissions_classes = [permissions.AllowAny]

    def get(self, request):
        user = request.user
        return Response({
            'username': user.username,
            'email': user.email,
            'groups': [group.name for group in user.groups.all()]
        })
    

class PetDelete(generics.DestroyAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer