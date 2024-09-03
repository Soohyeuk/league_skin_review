from rest_framework import serializers
from .models import Comments
from user.serializers import UserSerializer

class CommentSerializer(serializers.ModelSerializer):
    skin_name = serializers.CharField(source='skin.skin_name', read_only=True)
    class Meta: 
        fields = ['id', 'body', 'rating', 'created_at', 'owner_id', 'skin_name', 'skin']
        model = Comments
    