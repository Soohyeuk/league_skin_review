from django.urls import path
from .views import MyTokenObtainPairView, SingleUserView, AllUsersView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [ 
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('single_user/<int:pk>', SingleUserView.as_view(), name='single_user'),
    path('all_users', AllUsersView.as_view(), name='all_users')
]