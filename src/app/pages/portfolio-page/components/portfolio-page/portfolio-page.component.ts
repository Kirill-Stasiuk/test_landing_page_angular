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
  extraData: PortfolioProject[] = EXTRA_DATA
  filters: Filter[] = FILTERS
  works = PORTFOLIO_PROJECT
  extra = EXTRA_DATA

  allCardLoad: boolean = false
  activeTab: string = ""

  constructor() {}

  ngOnInit(): void {}

  setActive(tabIndex: string) {
    this.activeTab = tabIndex
    this.projectPortfolio = []
    this.works.forEach((card) => {
      if (card.categoryId === this.activeTab || this.activeTab === "") {
        this.projectPortfolio.push(card)
      }
    })
  }

  getMoreData() {
    this.extra.forEach((card) => {
      this.projectPortfolio.push(card)
      this.allCardLoad = true
    })
  }
}
