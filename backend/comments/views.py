from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView

from .serializers import CommentSerializer
from .models import Comments


class CommentsView(ListCreateAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentSerializer