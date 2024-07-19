from django.contrib import admin
from django.urls import path
from comments import views

urlpatterns = [
    path('all_comments/', views.CommentsView.as_view()),
]
