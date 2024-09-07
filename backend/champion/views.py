import requests
from django.http import JsonResponse
from .models import Champion

def fetch_and_save_champions(request):
    try:
        response = requests.get("https://some-api-url.com/champions")
        data = response.json()  # Assuming the data is returned as JSON

        for champ in data['champions']:  
            Champion.objects.update_or_create(
                name=champ['name'],  
                defaults={
                    'champ_id': champ['id'],
                    'name': champ['name'],
                    'champ_key': champ['key'],
                    'title': champ['title'],
                }
            )
        
        return JsonResponse({"message": "Champion data saved successfully!"})
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
