from __future__ import unicode_literals, absolute_import, division
from django.shortcuts import render


def home(request):
    return render(request, 'home.html')