import { Component } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { PrivacyComponent } from '../../pages/privacy/privacy.component';
import { TermsComponent } from '../../pages/terms/terms.component';
import { NotfoundComponent } from '../../pages/notfound/notfound.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [HomeComponent, PrivacyComponent, TermsComponent, NotfoundComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {}
