describe('Product page render correct', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/');
    await page.setViewport({ width: 1440, height: 800 });
  });

  it('Show Title of product details', async () => {
    await expect(page.title()).resolves.toMatch('Koio | Product details');
  });

  it('Product requested!', async () => {
    await page.waitForResponse('http://localhost:3000/api/product/1');
  }, 6000);

  it('Page render title with product name', async () => {
    await expect(page.title()).resolves.toMatch(
      'Koio | Product details | CAPRI TRIPLE WHITE'
    );
  });

  it('Page render product details!', async () => {
    await expect(page).toMatch('CAPRI TRIPLE WHITE');
    await expect(page).toMatch('$268');
    await expect(page).toMatchElement('[aria-label="Size button"]');
    await expect(page).toMatchElement('[aria-label="Add to cart button"]');
    await expect(page).toMatchElement('[aria-labelledby="Product details"]');
    await expect(page).toMatchElement('[aria-label="Product images preview"]');
  });

  it('Image slider is clickable', async () => {
    await page.click('[aria-label="slide item 2"]');
    await expect(page).toMatchElement(
      '.carousel .thumbs .thumb.selected[aria-label="slide item 2"]'
    );
  });
});
