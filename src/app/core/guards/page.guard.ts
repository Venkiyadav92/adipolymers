import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SeoService } from '../services/seo.service';

export const pageGuard: CanActivateFn = (route) => {
  const seo = inject(SeoService);

  const seoData = route.data?.['seo'];
  if (seoData) {
    seo.update(seoData);
  }

  return true;
};
