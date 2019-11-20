# from api.api.views import ApplicationViewSet
# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'', ApplicationViewSet, base_name='Applications')
# urlpatterns = router.urls

from django.urls import path
from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from .views import ApplicationDetailView, ApplicationCreateView, ApplicationDeleteView

application_detail = ApplicationDetailView.as_view({
    'get':'list'
})

urlpatterns = [
    path('', ApplicationCreateView.as_view()),
    url(r'^test/(?P<key>[^/]+)/$', application_detail),
    path('delete/<pk>', ApplicationDeleteView.as_view()),
]
