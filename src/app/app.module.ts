import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { HeaderComponent } from "./shared/components/header/header.component"
import { FooterComponent } from "./shared/components/footer/footer.component"
import { HomePageComponent } from "./pages/home-page/components/home-page/home-page.component"
import { ButtonComponent } from "./shared/components/button/button.component"
import { ServicesPageComponent } from "./pages/services-page/components/services-page/services-page.component";
import { ServiceListComponent } from './shared/components/service-list/service-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ServicesPageComponent,
    ButtonComponent,
    ServiceListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ButtonComponent],
})
export class AppModule {}
