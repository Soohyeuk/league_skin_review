from rest_framework import serializers
from .models import Skins
from comments.serializers import CommentSerializer

class SkinSerializer(serializers.ModelSerializer):
    reviews = CommentSerializer(many=True, read_only=True)
    average_rating = serializers.SerializerMethodField()
    class Meta:
        model = Skins
        fields =  ['skin_img', 'skin_name', 'release_date', 'price', 'reviews', 'average_rating']
    
    def get_average_rating(self, obj):
        return obj.average_rating()