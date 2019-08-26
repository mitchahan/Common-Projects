const rp = require('request-promise');
const $ = require('cheerio');
const commonProjWhiteURL = 'https://shop.nordstrom.com/s/common-projects-original-achilles-sneaker-men/4976450?origin=keywordsearch-personalizedsort&breadcrumb=Home%2FAll%20Results&color=white';
const commonProjRedURL = 'https://shop.nordstrom.com/s/common-projects-retro-sneaker-men/5090128?origin=keywordsearch-personalizedsort&breadcrumb=Home%2FAll%20Results&color=white%2F%20red';
var redPrice, whitePrice;

async function getPrices () {
  await rp(commonProjWhiteURL)
  .then(function(html) {
    var string = $('.Z1WEo3w', html).text();
    whitePrice = string.split('$')[1];
    console.log('All white: ' + whitePrice);
  })
  .catch(function(err) {
    console.log(err);
  });

  await rp(commonProjRedURL)
    .then(function(html) {
      var string = $('.Z1WEo3w', html).text().toString();
      redPrice = string.split('$')[1];
      console.log('White with red accent: ' + redPrice);
    })
    .catch(function(err) {
      console.log(err);
  });
};

getPrices().then( () => {
  if (Number(whitePrice) < 350) {
    console.log('White\'s on sale: https://shop.nordstrom.com/s/common-projects-original-achilles-sneaker-men/4976450?origin=keywordsearch-personalizedsort&breadcrumb=Home%2FAll%20Results&color=white');
  } else console.log(Number(whitePrice));
  if (Number(redPrice) < 400) {
    console.log('Red\'s on sale: https://shop.nordstrom.com/s/common-projects-retro-sneaker-men/5090128?origin=keywordsearch-personalizedsort&breadcrumb=Home%2FAll%20Results&color=white%2F%20red')
  } else console.log(Number(redPrice));
});