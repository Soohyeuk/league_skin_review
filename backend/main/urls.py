from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('user/', include('user.urls')),
    path('comments/', include('comments.urls')),
    path('skin/', include('skin.urls')),
    path('admin/', admin.site.urls),
]
