from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.validators import ASCIIUsernameValidator

class Users(AbstractUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True)
    username_validator = ASCIIUsernameValidator()