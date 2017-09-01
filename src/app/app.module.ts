import { ProductsService } from './products.service';
import { AccordionModule } from 'ngx-accordion';
import { routes } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ProductcatalogueComponent } from './productcatalogue/productcatalogue.component';
import { NavigationbarComponent } from './header/navigationbar.component';
import { NopageavailableComponent } from './nopageavailable/nopageavailable.component';
import { ProductfilterPipe } from './productfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProductcatalogueComponent,
    NavigationbarComponent,
    NopageavailableComponent,
    ProductfilterPipe
  ],
  imports: [
    AccordionModule,
    BrowserModule,
    routes,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
