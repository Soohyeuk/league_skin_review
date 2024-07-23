from django.urls import re_path,path
from user import views

urlpatterns = [
    re_path('login/', views.login),
    re_path('signup/', views.signup),
    path('', views.UserView.as_view()),
    path('<int:pk>/', views.UserDetailView.as_view())
]
