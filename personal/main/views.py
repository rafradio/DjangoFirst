from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    notes = []
    data = {'notes': notes}
    return render(request, 'main/index.html', data)

def about(request):
    return render(request, 'main/about.html')