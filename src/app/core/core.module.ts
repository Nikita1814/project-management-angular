import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeFeatureCardComponent } from './components/welcome-feature-card/welcome-feature-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { NbButtonModule, NbUserModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    WelcomePageComponent,
    NotFoundPageComponent,
    HeaderComponent,
    WelcomeFeatureCardComponent,
    FooterComponent,
  ],
  imports: [RouterModule, CommonModule, NbButtonModule, NbUserModule],
  exports: [HeaderComponent, WelcomePageComponent, FooterComponent],
})
export class CoreModule {}
