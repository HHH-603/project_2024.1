import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import "../styles/global.css";

const IndexPage = () => {
  return (
    <body id="body" className="flex flex-col min-h-screen items-center">
      <header
        id="header"
        className="flex flex-col w-full h-fit shadow-ls sticky top-0 bg-white"
      >
        <div className="flex flex-row w-full h-fit">
          <div className="flex flex-row w-1/2 h-fit items-center justify-start space-x-4 px-2 py-4">
            <a
              href="#"
              className="text-sky-600 antialaised border-r-2 border-black pr-4"
            >
              +1 603 123 4567
            </a>
            <a href="#" className="text-sky-600 antialaised">
              github.unlocking468@passmail.net
            </a>
          </div>
          <div className="flex flex-row w-1/2 h-fit items-center justify-end space-x-4 px-2 py-4">
            <a href="#" className="text-sky-600 antialaised">
              Instagram
            </a>
            <a href="#" className="text-sky-600 antialaised">
              Flickr
            </a>
            <a href="#" className="text-sky-600 antialaised">
              TikTok
            </a>
            <a href="#" className="text-sky-600 antialaised">
              Facebook
            </a>
            <a href="#" className="text-sky-600 antialaised">
              Facebook
            </a>
            <a href="#" className="text-sky-600 antialaised">
              Facebook
            </a>
            <a href="#" className="text-sky-600 antialaised">
              LinkedIn
            </a>
          </div>
        </div>
        <nav className="flex flex-row w-full h-fit bg-black text-white px-2 py-4">
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
            <h1 className="antialaised">Northern New England Sign Company</h1>
          </div>
          <div className="flex flex-row w-1/2 max-h-full items-center justify-end space-x-4 py-2">
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
      <main
        id="main"
        className="flex flex-col w-2/3 h-fit px-2 py-4 bg-emerald-200"
      >
        <p>
          And the sign said "Long-haired freaky people Need not apply" So I
          tucked my hair up under my hat And I went in to ask him why He said,
          "You look like a fine upstandin' young man I think you'll do" So I
          took off my hat and said, "Imagine that Huh, me workin' for you" Whoa
          Sign, sign Everywhere a sign Blockin' out the scenery Breakin' my mind
          Do this, don't do that Can't you read the sign? And the sign said
          "Anybody caught trespassin' Will be shot on sight" So I jumped on the
          fence and I yelled at the house "Hey! What gives you the right To put
          up a fence to keep me out But to keep Mother Nature in? If God was
          here, he'd tell you to your face 'Man, you're some kind of sinner'"
          Sign, sign Everywhere a sign Blockin' out the scenery Breakin' my mind
          Do this, don't do that Can't you read the sign? Now, hey you, mister,
          can't you read? You got to have a shirt and tie to get a seat You
          can't even watch, no, you can't eat You ain't supposed to be here The
          sign said, "You've got to have a membership card To get inside" Uh And
          the sign said "Everybody welcome Come in, kneel down and pray" But
          when they passed around the plate at the end of it all I didn't have a
          penny to pay So I got me a pen and a paper And I made up my own little
          sign I said, "Thank you, Lord, for thinkin' 'bout me I'm alive and
          doin' fine" Woo! Sign, sign Everywhere a sign Blockin' out the scenery
          Breakin' my mind Do this, don't do that Can't you read the sign? Sign,
          sign Everywhere a sign Sign
        </p>
      </main>
      <footer
        id="footer"
        className="flex flex-col w-full h-fit fixed bottom-0 bg-black text-white items-center justify-center"
      >
        <div className="flex flex-col w-full items-center justify-center px-2 py-4">
          <h1 className="antialaised">
            2024&#169; Northern New England Sign Company
          </h1>
          <p className="antialaised">
            123 North Main Street, Concord, NH 03301
          </p>
          <p className="antialaised italic text-light">
            "Sign, sign, everywhere a sign; blockin' out the scenery, breakin'
            my mind. Do this, don't do that - can't you read the sign?"
          </p>
        </div>
      </footer>
    </body>
  );
};

export default IndexPage;

export const Head = () => <title>Northern New England Sign Company</title>;
