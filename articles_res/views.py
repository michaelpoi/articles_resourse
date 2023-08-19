from django.http import HttpResponse
from django.shortcuts import render, redirect

from art_overview.models import Article
from art_overview.views import get_translation
from offer.models import OfferTransEn, OfferTransDe, Offer
from portfolio.views import get_translation_project
from portfolio.models import ProjectPortfolio
from webcontrol.models import WebManager


def main_page(request):
    context = {}
    articles = Article.objects.filter(is_published=True).order_by('-likes')[:3]
    for article in articles:
        article = get_translation(request,article)
    context['articles'] = articles
    projects = ProjectPortfolio.objects.order_by('-likes')[:3]
    for project in projects:
        project = get_translation_project(request,project)
    if len(projects) >= 0:
        main_project = projects[0]
        secondary_projects = projects[1:3]
        context['main_project'] = main_project
        context['secondary_projects'] = secondary_projects
    controller = WebManager.objects.first()
    controller.first_offer = get_translation_offer(request, controller.first_offer)
    controller.second_offer = get_translation_offer(request, controller.second_offer)
    controller.third_offer = get_translation_offer(request, controller.third_offer)
    context['controller'] = controller
    return render(request, 'articles_res/landing.html', context=context)

def get_translation_offer(request, offer):
    try:
        lang_code = request.session['user_lang']
    except KeyError:
        lang_code = 'ua'
    offer_id = offer.offer_id
    match lang_code:
        case 'en':
            try:
                trans = OfferTransEn.objects.get(offer_id=offer_id)
            except:
                return offer
        case 'de':
            try:
                trans = OfferTransDe.objects.get(offer_id=offer_id)
            except:
                return offer
        case 'ua':
            return Offer.objects.get(offer_id=offer_id)
    offer.title = trans.title
    offer.intro = trans.intro
    offer.text_field_1 = trans.text_field_1
    offer.text_field_2 = trans.text_field_2
    offer.text_field_3 = trans.text_field_3
    offer.footer = trans.footer
    return offer

def error_404(request, exception):
    context = {
        'code': '404',
        'message': 'Щось пішло не так',
        'solution': 'Схоже ця сторінка переїхала'
    }
    return render(request, 'error/error.html', status=404, context=context)


def error_500(request):
    context = {
        'code': '500',
        'message': 'Схоже що сервер відпочиває',
        'solution': 'Зверніться трохи пізніше'
    }
    return render(request, 'error/error.html', status=404, context=context)


def set_lang(request, lang_code):
    request.session['user_lang'] = lang_code
    print(request.session['user_lang'])
    return redirect('main')