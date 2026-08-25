import { Injectable } from '@angular/core';
import { Link } from '../models/link.model';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  getLinks(): Link[] {
    return [
      {
        label: 'Menú',
        url: 'https://drive.google.com/file/d/1N36UCOY6W55ZEtx3ZXa56WtPC2xZtdaG/view?usp=sharing',
        icon: 'bi-link-45deg',
        highlight: true
      },
      {
        label: 'Whatsapp',
        url: 'https://wa.me/+59177632194',
        icon: 'bi-whatsapp',
        social: true
      },
      {
        label: 'Facebook',
        url: 'https://www.facebook.com/profile.php?id=61585468384758',
        icon: 'bi-facebook',
        social: true
      },
      {
        label: 'Instagram',
        url: 'https://www.instagram.com/pollosmision',
        icon: 'bi-instagram',
        social: true
      },
      {
        label: 'TikTok',
        url: 'https://www.tiktok.com/@pollosmision',
        icon: 'bi-tiktok',
        social: true
      }
    ];
  }
  
}
