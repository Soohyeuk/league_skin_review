# Generated by Django 5.0.6 on 2024-09-05 00:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skin', '0003_alter_skins_skin_img'),
    ]

    operations = [
        migrations.AddField(
            model_name='skins',
            name='champ_origin',
            field=models.CharField(default=True, max_length=30),
        ),
    ]
