import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ErrorPageComponent } from "./pages/error-page/components/error-page/error-page.component"

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("src/app/pages/home-page/home-page.module").then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: "services",
    loadChildren: () =>
      import("src/app/pages/services-page/services-page.module").then(
        (m) => m.ServicesPageModule
      ),
  },
  {
    path: "portfolio",
    loadChildren: () =>
      import("src/app/pages/portfolio-page/portfolio-page.module").then(
        (m) => m.PortfolioPageModule
      ),
  },
  {
    path: "pricing",
    loadChildren: () =>
      import("src/app/pages/pricing-page/pricing-page.module").then(
        (m) => m.PricingPageModule
      ),
  },
  {
    path: "testimonials",
    loadChildren: () =>
      import("src/app/pages/testimonials-page/testimonials-page.module").then(
        (m) => m.TestimonialsPageModule
      ),
  },
  {
    path: "**",
    component: ErrorPageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
