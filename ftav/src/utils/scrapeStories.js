const cheerio = require('cheerio');
const fetch = require('node-fetch');

const scrapeStories = async () => {
    const response = await fetch('https://ftalphaville.ft.com/');
    const body = await response.text();
    const $ = cheerio.load(body);
    const stories = [];
    // Replace 'selector' with the actual selector for the stories on the FT Alphaville site.
    $('selector').each((index, element) => {
        const title = $(element).text();
        const url = $(element).attr('href');
        stories.push({ title, url });
    });
    return stories;
};

module.exports = scrapeStories;
