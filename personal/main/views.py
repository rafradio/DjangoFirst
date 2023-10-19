from django.shortcuts import render
from django.http import HttpResponse
import logging

logger = logging.getLogger(__name__)

def index(request):
    logger.info('Index page accessed')
    notes = []
    data = {'notes': notes}
    return render(request, 'main/index.html', data)

def about(request):
    logger.info('About page accessed')
    return render(request, 'main/about.html')