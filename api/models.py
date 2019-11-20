import random
import string
from django.db import models


class Application(models.Model):
    title = models.CharField(max_length=120)
    key = models.CharField(max_length=256, editable=False, default=''.join(random.choice(string.ascii_letters + string.digits) for _ in range(128)))

    def __str__(self):
        return self.title
