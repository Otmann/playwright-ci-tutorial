// tests/example.spec.ts
import { test, expect } from '@playwright/test';

test('Startseite laden und Titel prüfen', async ({ page }) => {
  // Zur Playwright-Dokumentationsseite navigieren
  await page.goto('https://playwright.dev/');
  // Prüfen, ob der Titel "Playwright" enthält
  await expect(page).toHaveTitle(/Playwright/);
});

test('Suche funktioniert', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Auf den Such-Button klicken
  await page.click('button.DocSearch-Button');
  // In die Suchleiste tippen
  await page.locator('.DocSearch-Input').fill('automation');
  // Ein Suchergebnis sollte erscheinen
  // Warte auf das erste sichtbare Suchergebnis-Container-Element
await expect(page.locator('.DocSearch-Hits').first()).toBeVisible();
// ODER: Wenn du auf ein konkretes Ergebnis warten willst:
// await expect(page.getByRole('link', { name: 'Automated testing' })).toBeVisible();
});
// Test des Hooks

test('Einfacher Text-Check: Seite enthält "Playwright"', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Prüft, ob der Text "Playwright" irgendwo auf der Seite steht
//  await expect(page.getByText('Playwright')).toBeVisible();
    await expect(page.getByText('Playwright enables reliable')).toBeVisible();
});
