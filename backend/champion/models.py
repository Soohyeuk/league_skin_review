from django.db import models

class Champion(models.Model):
    champ_id = models.CharField(max_length=30, unique=True)
    name = models.CharField(max_length=30, unique=True)
    champ_key = models.IntegerField(unique=True)

    title = models.TextField(max_length=200)