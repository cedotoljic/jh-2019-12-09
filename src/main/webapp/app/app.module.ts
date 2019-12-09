import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Jh20191209SharedModule } from 'app/shared/shared.module';
import { Jh20191209CoreModule } from 'app/core/core.module';
import { Jh20191209AppRoutingModule } from './app-routing.module';
import { Jh20191209HomeModule } from './home/home.module';
import { Jh20191209EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Jh20191209SharedModule,
    Jh20191209CoreModule,
    Jh20191209HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Jh20191209EntityModule,
    Jh20191209AppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class Jh20191209AppModule {}
