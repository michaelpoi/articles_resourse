"""
WSGI config for articles_res project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os
import sys
from django.core.wsgi import get_wsgi_application

path = "/root/myapp/articles_resourse"

if path not in sys.path:
	sys.path.append(path)
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "articles_res.settings")

application = get_wsgi_application()
