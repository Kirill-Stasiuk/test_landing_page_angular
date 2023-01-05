import { Pricing } from "../models/pricing.model"

export const PRICING_CARD: Pricing[] = [
  {
    id: 1,
    type: "Basic",
    price: "25",
    description: [
      "Interior Design",
      "Project Discussion",
      "Space Planning",
      "Online Consultation",
    ],
    isActive: false,
  },
  {
    id: 2,
    type: "Standart",
    price: "50",
    description: [
      "Color Analysis",
      "Space Planning",
      "Home Remodeling",
      "3D Interior Model",
    ],
    isActive: true,
  },
  {
    id: 3,
    type: "Premium",
    price: "80",
    description: [
      "Concept Development",
      "Decoration Services",
      "Interior Architecture",
      "Flooring Installation",
    ],
    isActive: false,
  },
]
