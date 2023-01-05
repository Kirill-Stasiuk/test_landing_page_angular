import { Component, OnInit } from "@angular/core"
import {
  Filter,
  PortfolioProject,
} from "../../../../shared/models/portfolio.model"
import {
  EXTRA_DATA,
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
  extraData: PortfolioProject[] = EXTRA_DATA
  allCardLoad: boolean = false

  activeTab: string = ""

  constructor() {}

  ngOnInit(): void {}

  setActive(tabIndex: string) {
    this.activeTab = tabIndex
    this.projectPortfolio = []
    PORTFOLIO_PROJECT.forEach((card) => {
      if (this.checkFilter(card)) {
        this.projectPortfolio.push(card)
      }
    })
  }

  getMoreData() {
    EXTRA_DATA.forEach((card) => {
      this.projectPortfolio.push(card)
      this.allCardLoad = true
    })
  }

  private checkFilter(card: PortfolioProject): boolean {
    return card.categoryId === this.activeTab || this.activeTab === ""
  }
}
