import { Filter, PortfolioProject } from "../models/portfolio.model"

export const PORTFOLIO_PROJECT: PortfolioProject[] = [
  {
    id: 1,
    image: "assets/images/rooms/img.png",
    categoryId: "commercial",
  },
  {
    id: 2,
    image: "assets/images/rooms/Frame%202.png",
    categoryId: "office",
  },
  {
    id: 3,
    image: "assets/images/rooms/Frame%204.png",
    categoryId: "commercial",
  },
  {
    id: 4,
    image: "assets/images/rooms/Frame%205.png",
    categoryId: "resident",
  },
  {
    id: 5,
    image: "assets/images/rooms/Frame%206.png",
    categoryId: "other",
  },
  {
    id: 6,
    image: "assets/images/rooms/Frame%207.png",
    categoryId: "commercial",
  },
  {
    id: 7,
    image: "assets/images/rooms/Frame%208.png",
    categoryId: "commercial",
  },
  {
    id: 8,
    image: "assets/images/rooms/Frame%209.png",
    categoryId: "office",
  },
]

export const EXTRA_DATA: PortfolioProject[] = [
  {
    id: 9,
    image: "assets/images/rooms/Frame%207.png",
    categoryId: "commercial",
  },
  {
    id: 10,
    image: "assets/images/rooms/Frame%208.png",
    categoryId: "commercial",
  },
  {
    id: 11,
    image: "assets/images/rooms/Frame%209.png",
    categoryId: "office",
  },
]

export const FILTERS: Filter[] = [
  {
    text: "All",
    index: "",
    isActive: true,
  },
  {
    text: "Commercial",
    index: "commercial",
    isActive: false,
  },
  {
    text: "Residential",
    index: "resident",
    isActive: false,
  },
  {
    text: "Office",
    index: "office",
    isActive: false,
  },
  {
    text: "Other",
    index: "other",
    isActive: false,
  },
]
