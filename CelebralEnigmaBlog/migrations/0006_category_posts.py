# Generated by Django 5.0.6 on 2024-06-06 06:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CelebralEnigmaBlog', '0005_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='posts',
            field=models.ManyToManyField(related_name='categories', to='CelebralEnigmaBlog.post'),
        ),
    ]