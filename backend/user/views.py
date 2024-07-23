from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from .serializers import UserSerializer
from rest_framework.generics import ListAPIView


@api_view(['POST'])
def login(request):
    user = get_object_or_404(get_user_model(), username=request.data['username'])
    if not user.check_password(request.data['password']):
        return Response("missing user", status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(user)
    return Response({'token': token.key, 'user': serializer.data})

@api_view(['POST'])
def signup(request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user = get_user_model().objects.get(username=request.data['username'])
            user.set_password(request.data['password'])
            user.save()
            token = Token.objects.create(user=user)
            return Response({'token':token.key, 'user':serializer.data})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserView(ListAPIView):
    model = get_user_model() 
    serializer_class = UserSerializer
    queryset = get_user_model().objects.all()

class UserDetailView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    queryset = get_user_model().objects.all()

    def get_object(self):
        user_id = self.kwargs.get('pk')  # Get the ID from the URL parameters
        try:
            return get_user_model().objects.get(pk=user_id)
        except get_user_model().DoesNotExist:
            raise Exception('User not found')