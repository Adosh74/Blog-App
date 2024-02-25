const puppeteer = require('puppeteer');

test('Add two numbers', () => {
    const sum = 1 + 2;

    expect(sum).toEqual(3);
});

test('Launch a browser', async () => {
    const browser = await puppeteer.launch({
        headless: false,
    });

    const page = await browser.newPage();
});
