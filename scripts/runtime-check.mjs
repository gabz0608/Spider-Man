import { chromium } from 'playwright-core';

const base = process.env.QA_BASE || 'http://127.0.0.1:4173/';
const edge = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const routes = ['/', '/tobey-maguire', '/andrew-garfield', '/tom-holland', '/aranhaverso', '/quadrinhos', '/comparativo', '/cronologia', '/por-tras-da-mascara', '/fontes'];
const browser = await chromium.launch({ executablePath: edge, headless: true });
const context = await browser.newContext({ viewport: { width: 430, height: 932 } });
const checks = [];

for (const route of routes) {
  const page = await context.newPage();
  const errors = [];
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', error => errors.push(error.message));
  const response = await page.goto(`${base}#${route}`, { waitUntil: 'networkidle', timeout: 30000 });
  await page.locator('h1').waitFor({ state: 'visible' });
  await page.evaluate(() => Promise.all([...document.images].map(image => image.complete ? true : new Promise(resolveImage => {
    image.addEventListener('load', resolveImage, { once: true });
    image.addEventListener('error', resolveImage, { once: true });
  }))));
  const metrics = await page.evaluate(() => ({
    h1: document.querySelectorAll('h1').length,
    broken: [...document.images].filter(image => image.naturalWidth === 0).length,
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  }));
  checks.push({ route, status: response?.status(), errors, ...metrics });
  await page.close();
}

const interaction = await context.newPage();
await interaction.goto(`${base}#/`, { waitUntil: 'networkidle' });
await interaction.locator('.menuButton').click();
const menuOpen = await interaction.locator('.topbar nav.open').isVisible();
await interaction.goto(`${base}#/tobey-maguire`, { waitUntil: 'networkidle' });
await interaction.locator('.spoiler button').first().click();
const spoilerOpen = await interaction.locator('.spoiler p').first().isVisible();
await interaction.goto(`${base}#/quadrinhos`, { waitUntil: 'networkidle' });
await interaction.getByRole('button', { name: 'Bronze' }).click();
const comicFilter = new URL(interaction.url()).hash.includes('era=Bronze') && await interaction.locator('.comicGrid article').count() > 0;
await interaction.goto(`${base}#/cronologia`, { waitUntil: 'networkidle' });
await interaction.getByRole('button', { name: 'Tom' }).click();
const timelineFilter = new URL(interaction.url()).hash.includes('universo=Tom') && await interaction.locator('.timeline li').count() > 0;
await browser.close();

const interactions = { menuOpen, spoilerOpen, comicFilter, timelineFilter };
const failed = checks.filter(check => check.status !== 200 || check.h1 !== 1 || check.broken || check.overflow || check.errors.length);
console.log(JSON.stringify({ base, routes: checks.length, failed, interactions }, null, 2));
if (failed.length || Object.values(interactions).some(value => !value)) process.exit(1);
