from django.contrib import admin
from django.urls import path
from skin import views 

urlpatterns = [
    path('', views.SkinView.as_view()),
    path('<int:pk>/', views.SingleSkinView.as_view()),
]
