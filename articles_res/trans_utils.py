from art_overview.models import ArticleTransEn, ArticleTransIt, Article
from offer.models import OfferTransEn, OfferTransIt, Offer
from portfolio.models import ProjectTransEn, ProjectTransIt


def get_translation_offer(offer,lang_code):
    offer_id = offer.offer_id
    match lang_code:
        case 'en':
            try:
                trans = OfferTransEn.objects.get(offer_id=offer_id)
            except:
                return offer
        case 'it':
            try:
                trans = OfferTransIt.objects.get(offer_id=offer_id)
            except:
                return offer
        case 'ua':
            return Offer.objects.get(offer_id=offer_id)
    try:
        offer.title = trans.title
        offer.intro = trans.intro
        offer.text_field_1 = trans.text_field_1
        offer.text_field_2 = trans.text_field_2
        offer.text_field_3 = trans.text_field_3
        offer.footer = trans.footer
    except:
        return offer
    return offer


def get_translation_article(article, lang_code):
    article_id = article.article_id
    match lang_code:
        case 'en':
            try:
                trans = ArticleTransEn.objects.get(article_id=article_id)
            except:
                return article
        case 'it':
            try:
                trans = ArticleTransIt.objects.get(article_id=article_id)
            except:
                return article
        case 'ua':
            return Article.objects.get(article_id=article_id)
    try:
        article.text = trans.text
        article.title = trans.title
        article.footer_text = trans.footer_text
    except:
        return article
    return article


def get_translation_project(project, lang_code):
    project_id = project.project_id
    match lang_code:
        case 'en':
            try:
                trans = ProjectTransEn.objects.get(project_id=project_id)
            except:
                return project
        case 'it':
            try:
                trans = ProjectTransIt.objects.get(project_id=project_id)
            except:
                return project
        case 'ua':
            return project
    try:
        project.desc = trans.desc
        project.title = trans.title
        project.style = trans.style
        project.type = trans.type
    except:
        return project
    return project
