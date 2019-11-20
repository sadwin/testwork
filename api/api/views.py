from rest_framework import viewsets

# class ApplicationViewSet(viewsets.ModelViewSet):
#     serializer_class = ApplicationSerializer
#     queryset = Application.objects.all()

from rest_framework import permissions
from rest_framework.generics import (
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView
)
from api.models import Application
from .serializers import ApplicationSerializer


class ApplicationDetailView(viewsets.ModelViewSet):
    serializer_class = ApplicationSerializer
    permission_classes = (permissions.AllowAny, )
    
    def get_queryset(self):
        key = self.kwargs['key']
        return Application.objects.filter(key=key)


class ApplicationCreateView(CreateAPIView):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    permission_classes = (permissions.AllowAny, )


class ApplicationDeleteView(DestroyAPIView):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    permission_classes = (permissions.AllowAny, )
