from rest_framework import permissions

class AdminLangNiPuede(permissions.BasePermission):
    message = "Jason I love you. mwah mwah"

    def has_permission(self, request, view):
        admin_ni_sya = request.user.is_superuser
        return admin_ni_sya

