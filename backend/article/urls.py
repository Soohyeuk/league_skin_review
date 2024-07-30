from django.contrib import admin
from django.urls import path
from article import views 

urlpatterns = [
    path('', views.ArticlesView.as_view()),
]
