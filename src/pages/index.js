import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const IndexPage = () => {
  return (
    <body id="body" className="flex min-h-sreen bg-slate-500">
      <header
        id="header"
        className="flex flex-col w-full h-fit shadow-ls bg-pink-200"
      >
        <div className="flex flex-row w-full h-fit bg-yellow-200">
          <div className="flex flex-row w-1/2 h-fit items-center justify-start space-x-4 bg-cyan-200">
            <a href="#" className="antialaised border-r-2 border-black pr-4">
              +1 603 123 4567
            </a>
            <a href="#" className="antialaised">
              github.unlocking468@passmail.net
            </a>
          </div>
          <div className="flex flex-row w-1/2 h-fit items-center justify-end space-x-4 bg-gray-200">
            <a href="#" className="antialaised">
              Instagram
            </a>
            <a href="#" className="antialaised">
              Flickr
            </a>
            <a href="#" className="antialaised">
              TikTok
            </a>
            <a href="#" className="antialaised">
              Facebook
            </a>
            <a href="#" className="antialaised">
              Facebook
            </a>
            <a href="#" className="antialaised">
              Facebook
            </a>
            <a href="#" className="antialaised">
              LinkedIn
            </a>
          </div>
        </div>
        <nav className="flex flex-row w-full h-fit bg-orange-200">
          <div className="flex flex-row w-1/2 h-fit items-center justify-start space-x-4 bg-red-200">
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
            <h1>Northern New England Sign Company</h1>
          </div>
          <div className="flex flex-row w-1/2 max-h-full items-center justify-end space-x-4 bg-teal-200">
            <a href="#" className="antialaised">
              Interior
            </a>
            <a href="#" className="antialaised">
              Exterior
            </a>
            <a href="#" className="antialaised">
              Vehicles
            </a>
            <a href="#" className="antialaised">
              Clients
            </a>
            <a href="#" className="antialaised">
              Gallery
            </a>
            <a href="#" className="antialaised">
              Contact
            </a>
          </div>
        </nav>
      </header>
      <main id="main"></main>
      <footer id="footer"></footer>
    </body>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
