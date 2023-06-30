from django import forms
from django.forms import ModelForm
from requests.models import Request


class RequestForm(ModelForm):
    services_available = (
            ('option1', 'Option 1'),
            ('option2', 'Option 2'),
            ('option3', 'Option 3'),
        )
    service = forms.MultipleChoiceField(widget=forms.CheckboxSelectMultiple, choices=services_available)
    class Meta:
        model = Request
        fields = '__all__'
