from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api import Lessons_usersViewSet, CustomTokenObtainPairView

router = DefaultRouter()
router.register(r'lessons_users', Lessons_usersViewSet, basename='lessons-users')

urlpatterns = [
]
