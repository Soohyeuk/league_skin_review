from django.db import models

class Comments(models.Model):
    owner_id = models.ForeignKey('user.Users', on_delete=models.SET_NULL, null=True)
    skin = models.ForeignKey('skin.Skins', related_name='reviews', on_delete=models.SET_NULL, null=True)
    body = models.TextField()
    rating = models.IntegerField()
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Reviewed by {self.owner_id.username} on {self.skin.skin_name}'