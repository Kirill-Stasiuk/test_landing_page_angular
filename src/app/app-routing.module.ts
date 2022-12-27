import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomePageComponent } from "./pages/home-page/components/home-page/home-page.component"
import { ServicesPageComponent } from "./pages/services-page/components/services-page/services-page.component"
import { PortfolioPageComponent } from "./pages/portfolio-page/components/portfolio-page/portfolio-page.component"

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
  },
  {
    path: "services",
    component: ServicesPageComponent,
  },
  {
    path: "portfolio",
    component: PortfolioPageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
