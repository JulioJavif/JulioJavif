import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebComponent } from './web.component';
import { WebRouterModule } from './web-router.module';
import { NavComponent } from '../components/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from '../components/footer/footer.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    WebComponent,
    NavComponent,
    FooterComponent,
    HomeContentComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    WebRouterModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
  ],
})
export class WebModule { }
