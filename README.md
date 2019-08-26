# Common-Projects
This simple NodeJS script will check the Nordstrom website and see if two pairs of shoes are ever on sale.

## How to use
- Well, first ya got to clone it
- `npm install`
- `node shoeScraper.js`

It's that simple!!

## Other notes
You can add your own clothes if you want to, tbh this is such a simple web scraper that you could add it from any website and just follow the convention I use to test if the price has dropped... just target that id for the price and provide the URL for the piece of clothing and what do ya know, it'll check the price.

it contains asynchronous functions, so it will wait until the price is retrieved and then spit out the price.

## Future Developments

I would like to find a better way to host this, so that it can run daily or every other day or something, but as of right now it isn't worth it to host it anywhere.

If I get around to it and flesh this out more, it may be worth it to host the server of this and maybe just layer over a React UI or something.