import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sections, socialLinks } from "@/data/footer-data";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Logo Section */}
          <section className="col-span-2 md:col-span-3 xl:col-span-1">
            <Link
              href={"/"}
              aria-label="logo"
              className="flex items-center space-x-2"
            >
              <Image
                src="https://demo.hyperce.io/logo.svg"
                alt="Logo"
                width={32}
                height={32}
              />
              <h3 className="text-xl lg:text-2xl font-black ml-1">Hyperce</h3>
            </Link>
            <p className="text-sm text-gray-600 mt-4">
              Unlock Your Business Potential with Customized Solutions
            </p>
            <div className="mt-4">
              <a href="#" className="group whitespace-nowrap">
                Request a quote today
                <span className="group-hover:pl-2 transition-all">➜</span>
              </a>
            </div>
            <div className="mt-4 flex items-center space-x-4 text-gray-500 flex-wrap">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:bg-primary hover:border-primary flex h-8 w-8 items-center justify-center rounded-full "
                  target="_blank"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </section>

          {sections.map((section, index) => (
            <section key={index} className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-black tracking-wider uppercase">
                {section.title}
              </h3>
              <ul role="list" className="mt-4 space-y-2">
                {section.links.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.url}
                      className="text-base text-gray-700 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-12 text-center">
          <span className="text-sm tracking-wide text-gray-600">
            © Hyperce 2023
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
