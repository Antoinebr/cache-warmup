const chalk = require('chalk');
const run = require('./run.js');

// Pages
const pages = require('./data/pages.json');
const products = require('./data/products.json');
const cats = require('./data/cats.json');


pages.urlset.url.forEach( page => {

    const mobileVersion = run(page.loc,true);

    const desktopVersion = run(page.loc);

    Promise.all([mobileVersion,desktopVersion])
    .then( r => console.log( chalk.green(`[cache generated OK] :  ${page.loc} on mobile and desktop`) ) )
    .catch( e => console.log(e) );
    
});



products.urlset.url.forEach( page => {

    const mobileVersion = run(page.loc,true);

    const desktopVersion = run(page.loc);

    Promise.all([mobileVersion,desktopVersion])
    .then( r => console.log( chalk.green(`[cache generated OK] :  ${page.loc} on mobile and desktop`) ) )
    .catch( e => console.log(e) );
    
});



cats.urlset.url.forEach( page => {

    const mobileVersion = run(page.loc,true);

    const desktopVersion = run(page.loc);

    Promise.all([mobileVersion,desktopVersion])
    .then( r => console.log( chalk.green(`[cache generated OK] :  ${page.loc} on mobile and desktop`) ) )
    .catch( e => console.log(e) );
    
});



