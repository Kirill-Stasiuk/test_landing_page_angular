export interface PortfolioProject {
  id?: number
  image: string
  categoryId: string
}

export interface Filter {
  text: string
  index: string
  isActive: boolean
}
