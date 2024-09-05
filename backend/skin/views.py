from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Skins
from .serializers import SkinSerializer, SingleSkinSerializer

class SkinView(ListCreateAPIView):
    queryset = Skins.objects.all()
    serializer_class = SkinSerializer


class SingleSkinView(RetrieveUpdateDestroyAPIView):
    queryset = Skins.objects.all()
    serializer_class = SingleSkinSerializer