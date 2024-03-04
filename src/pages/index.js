import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import "../styles/global.css";

const IndexPage = () => {
  return (
    <body id="body" className="flex flex-col min-h-screen items-center">
      <header
        id="header"
        className="flex flex-col w-full h-fit items-center shadow-ls bg-white"
      >
        <div className="flex flex-row w-full h-fit bg-nhGold">
          <div className="flex flex-row w-1/2 h-fit items-center justify-start space-x-4 py-4">
            <a
              href="#"
              className="font-semibold text-black antialaised border-r-2 border-black pr-4"
            >
              +1 603 123 4567
            </a>
            <a href="#" className="font-semibold text-black antialaised">
              github.unlocking468@passmail.net
            </a>
          </div>
          <div className="flex flex-row w-1/2 h-fit items-center justify-end space-x-4 py-4 opacity-100">
            <a href="#" className="font-semibold text-black antialaised">
              Instagram
            </a>
            <a href="#" className="font-semibold text-black antialaised">
              Flickr
            </a>
            <a href="#" className="font-semibold text-black antialaised">
              TikTok
            </a>
            <a href="#" className="font-semibold text-black antialaised">
              Facebook
            </a>
            <a href="#" className="font-semibold text-black antialaised">
              Facebook
            </a>
            <a href="#" className="font-semibold text-black antialaised">
              Facebook
            </a>
            <a href="#" className="font-semibold text-black antialaised">
              LinkedIn
            </a>
          </div>
        </div>
      </header>
      <nav className="flex flex-row w-full h-fit bg-nhBlue text-white py-4 sticky top-0">
        <div className="flex flex-row w-1/2 h-fit items-center justify-start space-x-4">
          <div className="flex flex-row w-fit h-fit items-center justify-center">
            <StaticImage
              src="../images/Seal_of_New_Hampshire.svg.png"
              alt="logo"
              placeholder="blurred"
              layout="constrained"
              width={120}
              height={120}
            />
          </div>
          <h1 className="antialaised text-4xl font-bold">
            Granite State Sign Company
          </h1>
        </div>
        <div className="flex flex-row w-1/2 max-h-full items-center justify-end space-x-4 py-2">
          <a href="#" className="font-semibold antialaised">
            Interior
          </a>
          <a href="#" className="font-semibold antialaised">
            Exterior
          </a>
          <a href="#" className="font-semibold antialaised">
            Vehicles
          </a>
          <a href="#" className="font-semibold antialaised">
            Clients
          </a>
          <a href="#" className="font-semibold antialaised">
            Gallery
          </a>
          <a href="#" className="font-semibold antialaised">
            Contact
          </a>
        </div>
      </nav>
      <main id="main" className="flex flex-col w-2/3 h-fit py-4 leading-8">
        <h2 className="antialaised text-3xl font-bold mb-4">
          Custom Sign Design in Northern New England
        </h2>
        <p className="antialaised mb-4">
          Since 1990, Granite State Sign Company has been known around the
          Northeast for our <span className="text-lg creative">creativity</span>{" "}
          and <span className="font-semibold">quality</span>. With a focus on{" "}
          <span className="font-semibold">superior craftsmanship</span>,
          <span className="font-semibold"> affordability</span>, and{" "}
          <span className="font-semibold">service</span>, our finished products
          stand apart in the industry.
        </p>
        <p className="antialaised mb-6">
          Our creative team delivers professionally designed signage for any
          application. We help you create a{" "}
          <span className="font-semibold">powerful first impression</span> for
          your business or organization.
        </p>
        <div className="flex flex-row w-full h-96">
          <div className="flex flex-col w-1/2 h-full justify-center bg-slate-400"></div>
          <div className="flex flex-col w-1/2 h-full justify-center">
            <h2 className="antialaised text-3xl font-bold mb-4">
              Exterior Sign Design
            </h2>
            <ul className="px-4">
              <li className="antialaised list-disc">
                Carved and sandblasted signs
              </li>
              <li className="antialaised list-disc">Storefront lettering</li>
              <li className="antialaised list-disc">Granite signs</li>
              <li className="antialaised list-disc">Monuments</li>
              <li className="antialaised list-disc">Lighted and LED signs</li>
              <li className="antialaised list-disc">Dimensional lettering</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row w-full h-96">
          <div className="flex flex-col w-1/2 h-full justify-center">
            <h2 className="antialaised text-3xl font-bold mb-4">
              Exterior Sign Design
            </h2>
            <ul className="px-4">
              <li className="antialaised list-disc">
                Carved and sandblasted signs
              </li>
              <li className="antialaised list-disc">Storefront lettering</li>
              <li className="antialaised list-disc">Granite signs</li>
              <li className="antialaised list-disc">Monuments</li>
              <li className="antialaised list-disc">Lighted and LED signs</li>
              <li className="antialaised list-disc">Dimensional lettering</li>
            </ul>
          </div>
          <div className="flex flex-col w-1/2 h-full justify-center bg-slate-400"></div>
        </div>
      </main>
      <footer
        id="footer"
        className="flex flex-col w-full h-fit bg-black text-white items-center justify-center"
      >
        <div className="flex flex-col w-full items-center justify-center py-4">
          <h1 className="antialaised">2024&#169; Granite State Sign Company</h1>
          <p className="antialaised">
            123 North Main Street, Concord, NH 03301
          </p>
          <p className="antialaised italic text-light">
            "From Lobster Boats to Lighthouse Quotes: Your Premier Signage
            Crafters in Northern New England!"
          </p>
        </div>
      </footer>
    </body>
  );
};

export default IndexPage;

export const Head = () => <title>Granite State Sign Company</title>;
