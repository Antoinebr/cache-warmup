require('dotenv').config()
const chalk = require('chalk');
const getSitemapPage = require('./pages');
const run = require('./run.js');


const [delayBetweenRequestInMs = 1000] = process.argv.slice(2);


// Pages
const pages = getSitemapPage(process.env.PAGES_SITEMAP_URL);
const posts = getSitemapPage(process.env.POSTS_SITEMAP_URL);
const products = getSitemapPage(process.env.PRODUCTS_SITEMAP_URL);
const productsCats = getSitemapPage(process.env.PRODUCTS_CATS_SITEMAP_URL);


Promise.all([pages, posts, products, productsCats])
    .then(async (results) => {

        for (let page of results) {

            for (let pageToLoad of page.urlset.url) {

                const mobileVersion = run(pageToLoad.loc, true);

                const desktopVersion = run(pageToLoad.loc);

                await Promise.all([mobileVersion, desktopVersion]).catch(e => console.log(chalk.red(e)));

                console.log(chalk.green(`[cache generated OK] :  ${pageToLoad.loc} on mobile and desktop`));

                await new Promise((resolve) => setTimeout(() => resolve(), delayBetweenRequestInMs));

            }
        }

    })
    .catch(e => console.log(e));