from django.db import models

# Create your models here.

class Skins(models.Model):
    skin_img = models.ImageField(upload_to='static/')
    skin_name = models.CharField(max_length=30, unique=True)
    release_date = models.DateTimeField()
    price = models.IntegerField()
    comments = models.ForeignKey('comments.Comments', null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.skin_name
    
    def average_rating(self):
        reviews = self.reviews.all()
        if reviews.exists():
           return reviews.aggregate(models.Avg('rating')).get('rating__avg')
        return  0 
    
    #need a function that calculates skin of the day/week (or it can be done with picking it manually every day/week).