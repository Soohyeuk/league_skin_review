from rest_framework import serializers
from .models import Comments
from user.serializers import UserSerializer

class CommentSerializer(serializers.ModelSerializer):
    class Meta: 
        fields = '__all__'
        model = Comments
    