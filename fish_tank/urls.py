from __future__ import unicode_literals, absolute_import, division
from django.conf.urls import include, url
from django.contrib import admin

import fish_tank.views

urlpatterns = [
    # Examples:
    url(r'^$', fish_tank.views.home, name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^admin/', include(admin.site.urls)),
]
