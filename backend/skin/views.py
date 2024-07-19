from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from .models import Skins
from .serializers import SkinSerializer

class SkinView(ListCreateAPIView):
    queryset = Skins.objects.all()
    serializer_class = SkinSerializer

    