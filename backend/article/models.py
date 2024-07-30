from django.db import models

class Articles(models.Model):
    title = models.CharField(max_length=150, unique=True)
    header_image = models.ImageField(upload_to='static/')
    release_date = models.DateTimeField()
    article_body = models.TextField()

    def __str__(self):
        return self.title
    