const { test, expect } = require('@playwright/test');
const { CategoryPage } = require('./pages/CategoryPage');
const { CreateItemPage } = require('./pages/CreateItemPage');

test.describe('Category Management', () => {
  let categoryPage;

  test.beforeEach(async ({ page }) => {
    categoryPage = new CategoryPage(page);
    await categoryPage.goto();
  });

  // Expected: should be OK
  test('should add a new category and show it in the item form', async ({ page }) => {
    const newCategory = `Category_${Date.now()}`;

    await categoryPage.createCategory(newCategory);

    // The app redirects back to the Add Category page
    await expect(page).toHaveURL('/categories/new');

    // The new category must appear in the Add Item dropdown
    const createItemPage = new CreateItemPage(page);
    await createItemPage.goto();
    const options = await createItemPage.getCategoryOptions();
    expect(options).toContain(newCategory);
  });

    // Expected: should be OK 
  test('should handle adding an existing category without adding a duplicate', async ({ page }) => {
    await categoryPage.createCategory('Electronics'); // default category

    // The app redirects back to the Add Category page
    await expect(page).toHaveURL('/categories/new');

    // 'Electronics' must still appear only once in the Add Item dropdown
    const createItemPage = new CreateItemPage(page);
    await createItemPage.goto();
    const options = await createItemPage.getCategoryOptions();
    expect(options.filter(o => o === 'Electronics')).toHaveLength(1);
  });
});