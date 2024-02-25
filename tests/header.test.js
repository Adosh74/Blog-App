const puppeteer = require('puppeteer');

test('Add two numbers', () => {
    const sum = 1 + 2;

    expect(sum).toEqual(3);
});

test('Launch a browser', async () => {
    const browser = await puppeteer.launch({
        headless: true,
    });

    const page = await browser.newPage();

    await page.goto('http://localhost:3000');

    const text = await page.$eval('a.brand-logo', el => el.innerHTML);

    expect(text).toEqual('Blogster');
});
