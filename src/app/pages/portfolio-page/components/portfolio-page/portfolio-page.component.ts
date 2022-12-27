import { Component, OnInit } from "@angular/core"
import {
  Filter,
  PortfolioProject,
} from "../../../../shared/models/portfolio.model"
import {
  FILTERS,
  PORTFOLIO_PROJECT,
} from "../../../../shared/statics/portfolio.static"

@Component({
  selector: "app-portfolio-page",
  templateUrl: "./portfolio-page.component.html",
  styleUrls: ["./portfolio-page.component.scss"],
})
export class PortfolioPageComponent implements OnInit {
  projectPortfolio: PortfolioProject[] = PORTFOLIO_PROJECT
  filters: Filter[] = FILTERS

  activeTab: string = ""

  constructor() {}

  ngOnInit(): void {}

  setActive(tabIndex: string) {
    this.activeTab = tabIndex
    this.projectPortfolio = []
    PORTFOLIO_PROJECT.forEach((card) => {
      if (this.checkForFilter(card)) {
        this.projectPortfolio.push(card)
      }
    })
  }

  private checkForFilter(card: PortfolioProject): boolean {
    return card.categoryId === this.activeTab || this.activeTab === ""
  }
}
