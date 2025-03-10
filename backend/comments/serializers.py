from rest_framework import serializers
from .models import Comments

class CommentSerializer(serializers.ModelSerializer):
    skin_name = serializers.CharField(source='skin.skin_name', read_only=True)
    champ_origin = serializers.CharField(source='skin.champ_origin', read_only=True)

    class Meta: 
        fields = '__all__'
        model = Comments
