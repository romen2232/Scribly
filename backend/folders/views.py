from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Folders
from .serializers import FoldersSerializer


class FoldersListCreateView(generics.ListCreateAPIView):
    queryset = Folders.objects.all()
    serializer_class = FoldersSerializer
    permission_classes = [permissions.IsAuthenticated]

    # TODO: Auto increment depth when creating a new folder
    def create(self, request, *args, **kwargs):
        serializer = FoldersSerializer(
            data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        folder = serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class FoldersRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Folders.objects.all()
    serializer_class = FoldersSerializer
    permission_classes = [permissions.IsAuthenticated]

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(
            instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        folder = serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
