from django.contrib import admin
from .models import Order


class OrderAdmin(admin.ModelAdmin):
    list_display = ('client_phone', 'client_address', 'client_name', 'order',)
    list_filter = ('client_name',)
    search_fields = ('client_name',)


admin.site.register(Order, OrderAdmin)
