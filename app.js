require('dotenv').config()
const chalk = require('chalk');
const getSitemapPage = require('./pages');
const run = require('./run.js');

// Pages

const pages = getSitemapPage(process.env.PAGES_SITEMAP_URL);
const posts = getSitemapPage(process.env.POSTS_SITEMAP_URL);
//const cats = getSitemapPage('https://www.antoinebrossault.com/category-sitemap.xml');

// succeeds when all succeed
Promise.all([pages, posts])
    .then(function (results) {

        for (page of results) {

            page.urlset.url.forEach(page => {

                const mobileVersion = run(page.loc, true);

                const desktopVersion = run(page.loc);

                Promise.all([mobileVersion, desktopVersion])
                    .then(r => console.log(chalk.green(`[cache generated OK] :  ${page.loc} on mobile and desktop`)))
                    .catch(e => console.log(e));
            });

        }
    })
    .catch(e => console.log(e));