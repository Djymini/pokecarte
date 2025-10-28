import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../features/auth/services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if(!auth.isAuthenticated() && auth.currentUser()?.role !== 'ADMIN') {
    router.navigateByUrl('/error')
    return false
  }
  return true
};
