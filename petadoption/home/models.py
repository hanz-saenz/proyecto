from django.db import models

url_static = 'static/assets/docs'
# Create your models here.
class Footer(models.Model):
    email = models.EmailField()
    phone = models.CharField(max_length=10)
    address = models.CharField(max_length=100)
    terms = models.FileField(upload_to=f'{url_static}/terms')

    def __str__(self):
        return self.email
    
    class Meta:
        verbose_name = 'Footer'
        verbose_name_plural = 'Footers'