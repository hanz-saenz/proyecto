from django.db import models

# Create your models here.

url_static = 'static/assets/images'

class Pet(models.Model):
    name = models.CharField('Nombre', max_length=100)
    breed = models.CharField('Raza', max_length=100)
    age = models.IntegerField('Edad en años')
    medical_notes = models.TextField('Notas medicas', blank=True)
    photo = models.ImageField('Foto', upload_to=f'{url_static}/pets', null=True, blank=True)


    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'Mascota'
        verbose_name_plural = 'Mascotas'