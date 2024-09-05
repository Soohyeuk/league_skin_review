from rest_framework.generics import ListCreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from .serializers import CommentSerializer
from .models import Comments


class CommentsView(ListCreateAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentSerializer

class CommentsByUserView(ListAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        owner_id = self.kwargs['owner_id']
        return Comments.objects.filter(owner_id=owner_id)


class SingleCommentView(RetrieveUpdateDestroyAPIView):
    serializer_class = CommentSerializer

    def get_object(self):
        owner_id = self.kwargs['owner_id']
        pk = self.kwargs['pk']
        return Comments.objects.get(owner_id=owner_id, id=pk)