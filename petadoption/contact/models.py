from django.db import models

# Create your models here.
class ContacUs(models.Model):

    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'Contacto'
        verbose_name_plural = 'Contactos'