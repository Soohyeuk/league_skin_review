from rest_framework import generics 
from .models import Articles 
from .serializers import ArticleSerializer

class ArticlesView(generics.ListCreateAPIView):
    queryset = Articles.objects.all()
    serializer_class = ArticleSerializer