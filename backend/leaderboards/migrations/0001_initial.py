# Generated by Django 3.2 on 2023-07-31 06:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('leagues', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Leaderboards',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('weak_date', models.DateTimeField(auto_now_add=True)),
                ('league', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='leagues.leagues')),
            ],
        ),
    ]
