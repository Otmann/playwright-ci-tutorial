import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Testdateien finden
  testDir: './tests',
  // Tests parallel ausführen (kann auch 'projects' sein)
  fullyParallel: true,
  // Retry failed tests on CI = 2 mal wiederholen
  retries: process.env.CI ? 2 : 0,
  // Max. Anzahl paralleler Worker-Prozesse (auf CI etwas reduzieren)
  workers: process.env.CI ? 2 : undefined,
  // Reporte: HTML-Report für CI und Liste in Konsole
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['list']
  ],
  // Browser-Projekte für CI: Chromium, Firefox, WebKit
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
