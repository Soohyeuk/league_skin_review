from django.urls import path
from .views import fetch_and_save_champions

urlpatterns = [
    path('fetch-champions/', fetch_and_save_champions, name='fetch-champions'),
]
