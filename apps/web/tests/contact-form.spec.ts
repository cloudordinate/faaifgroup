import { test, expect } from '@playwright/test';

test.describe('Contact form flow', () => {
  test('loads home page, fills contact form, submits, sees success state', async ({ page }) => {
    await page.goto('/');

    // Wait for the page to load
    await expect(page.getByRole('heading', { name: /Empowering Diverse/i })).toBeVisible();

    // Scroll to contact section
    await page.locator('#contact').scrollIntoViewIfNeeded();

    // Fill form fields
    await page.getByLabel('Full Name').fill('Alexandra Chen');
    await page.getByLabel('Email').fill('alex@test.com');
    await page.getByLabel('Company').fill('Acme Corp');
    await page.getByLabel('Reason for Inquiry').selectOption('SOFTWARE');
    await page
      .getByLabel('Message')
      .fill('We are interested in a potential partnership with FAAIF Group.');

    // Mock the API call to avoid needing a running backend
    await page.route('**/api/inquiries', async (route) => {
      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({ id: 'test-id', createdAt: new Date().toISOString() }),
      });
    });

    // Submit
    await page.getByRole('button', { name: /Submit Inquiry/i }).click();

    // Assert success state
    await expect(page.getByText('Received, thank you.')).toBeVisible({ timeout: 5000 });
  });
});
