# Generated by Django 5.0.6 on 2024-09-05 01:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0002_comments_owner_id_comments_skin'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comments',
            old_name='skin',
            new_name='skin_id',
        ),
    ]
