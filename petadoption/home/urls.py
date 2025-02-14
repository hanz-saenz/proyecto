from django.urls import path
from .views import FooterList
urlpatterns = [
    path('footer/', FooterList.as_view(), name='footer-list'),

]