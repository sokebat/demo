import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const sections = [
  {
    title: "Shop",
    links: [
      { name: "Fragrances", url: "/collections/fragrances" },
      { name: "Skincare", url: "/collections/skincare" },
      { name: "Men's Clothing", url: "/collections/mens-clothing" },
      { name: "Jewelry", url: "/collections/jewelery" },
      { name: "Electronics", url: "/collections/electronics" },
      { name: "Women's Clothing", url: "/collections/womens-clothing" },
      { name: "Smartphones", url: "/collections/smartphones" },
      { name: "Laptops", url: "/collections/laptops" },
      { name: "Groceries", url: "/collections/groceries" },
      { name: "Home Decoration", url: "/collections/home-decoration" },
      { name: "Furniture", url: "/collections/furniture" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help", url: "#" },
      { name: "Track Order", url: "#" },
      { name: "Shipping", url: "#" },
      { name: "Returns", url: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", url: "https://hyperce.io" },
      { name: "Blog", url: "https://hyperce.io/blog" },
      { name: "Services", url: "https://hyperce.io/#services" },
      { name: "Contact Us", url: "https://hyperce.io/contact" },
    ],
  },
];
const socialLinks = [
  {
    href: "https://facebook.com/hyperce",

    title: "facebook",
    icon: <Facebook />,
  },
  {
    href: "https://instagram.com/hyperce_io",

    title: "instagram",
    icon: <Instagram />,
  },
  {
    href: "https://twitter.com/hyperce_io",
    title: "twitter",
    icon: <Twitter />,
  },
  {
    href: "https://youtube.com/@hyperce",

    title: "youtube",
    icon: <Youtube />,
  },
  {
    href: "https://www.linkedin.com/company/hyperce/",

    title: "linkedin",
    icon: <Linkedin />,
  },
];

export { sections, socialLinks };
