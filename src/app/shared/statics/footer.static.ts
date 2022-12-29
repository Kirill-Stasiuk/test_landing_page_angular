import { FooterLinks, SocialMedia } from "../models/footer.model"

export const FOOTER_LINKS: FooterLinks[] = [
  {
    text: "About",
    link: "/",
  },
  {
    text: "Services",
    link: "/services",
  },
  {
    text: "Portfolio",
    link: "/portfolio",
  },
  {
    text: "Pricing",
    link: "/pricing",
  },
  {
    text: "Testimonials",
    link: "/testimonials",
  },
]

export const SOCIAL_MEDIA: SocialMedia[] = [
  {
    link: "https://twitter.com/",
    alt: "twitter",
    img: "/assets/images/twitter.svg",
  },
  {
    link: "https://www.linkedin.com/",
    alt: "linkedin",
    img: "/assets/images/likedin.svg",
  },
  {
    link: "https://www.facebook.com/",
    alt: "facebook",
    img: "/assets/images/facebook.svg",
  },
]
