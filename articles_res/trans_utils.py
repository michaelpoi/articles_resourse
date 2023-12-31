from art_overview.models import ArticleTransEn, ArticleTransIt
from offer.models import OfferTransEn, OfferTransIt
from portfolio.models import ProjectTransEn, ProjectTransIt


def get_translation_offer(offer, lang_code):
    offer_id = offer.offer_id
    if lang_code == 'en':
        try:
            trans = OfferTransEn.objects.get(offer_id=offer_id)
        except:
            return offer
    if lang_code == 'it':
        try:
            trans = OfferTransIt.objects.get(offer_id=offer_id)
        except:
            return offer
    if lang_code == 'ua':
        return offer
    # match lang_code:
    #     case 'en':
    #         try:
    #             trans = OfferTransEn.objects.get(offer_id=offer_id)
    #         except:
    #             return offer
    #     case 'it':
    #         try:
    #             trans = OfferTransIt.objects.get(offer_id=offer_id)
    #         except:
    #             return offer
    #     case 'ua':
    #         return Offer.objects.get(offer_id=offer_id)
    try:
        offer.title = trans.title
        offer.intro = trans.intro
        offer.text_field_1 = trans.text_field_1
        offer.text_field_2 = trans.text_field_2
        offer.text_field_3 = trans.text_field_3
        offer.footer = trans.footer
        offer.duration = trans.duration
    except:
        return offer
    return offer


def get_translation_article(article, lang_code):
    article_id = article.article_id
    if lang_code == 'en':
        try:
            trans = ArticleTransEn.objects.get(article_id=article_id)
        except:
            return article
    if lang_code == 'it':
        try:
            trans = ArticleTransIt.objects.get(article_id=article_id)
        except:
            return article
    if lang_code == 'ua':
        return article
    # match lang_code:
    #     case 'en':
    #         try:
    #             trans = ArticleTransEn.objects.get(article_id=article_id)
    #         except:
    #             return article
    #     case 'it':
    #         try:
    #             trans = ArticleTransIt.objects.get(article_id=article_id)
    #         except:
    #             return article
    #     case 'ua':
    #         return Article.objects.get(article_id=article_id)
    try:
        article.text = trans.text
        article.title = trans.title
        article.footer_text = trans.footer_text
        article.bottom_text = trans.bottom_text
    except:
        return article
    return article


def get_translation_project(project, lang_code):
    project_id = project.project_id
    if lang_code == 'en':
        try:
            trans = ProjectTransEn.objects.get(project_id=project_id)
        except:
            return project
    if lang_code == 'it':
        try:
            trans = ProjectTransIt.objects.get(project_id=project_id)
        except:
            return project
    if lang_code == 'ua':
        return project
    # match lang_code:
    #     case 'en':
    #         try:
    #             trans = ProjectTransEn.objects.get(project_id=project_id)
    #         except:
    #             return project
    #     case 'it':
    #         try:
    #             trans = ProjectTransIt.objects.get(project_id=project_id)
    #         except:
    #             return project
    #     case 'ua':
    #         return project
    try:
        project.desc = trans.desc
        project.title = trans.title
        project.style = trans.style
        project.type = trans.type
        project.duration = trans.duration
        project.story = trans.story
        project.challenge = trans.challenge
        project.our_work = trans.our_work
        project.value = trans.value
        project.result = trans.result
        project.scope_list = trans.scope_list
        project.timeframe_list = trans.timeframe_list
        project.involvement_list = trans.involvement_list
        project.result_short = trans.result_short
    except:
        return project
    return project
