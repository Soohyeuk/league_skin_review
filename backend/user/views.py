from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import MyTokenObtainPairSerializer, SingleUserSerializer, UserSerializer

from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from .models import Users


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class SingleUserView(RetrieveUpdateDestroyAPIView):
    queryset = Users.objects.all()
    serializer_class = SingleUserSerializer

class AllUsersView(ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UserSerializer

