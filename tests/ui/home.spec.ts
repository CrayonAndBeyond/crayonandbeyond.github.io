import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";

test.describe("Home Page Sanity Checks", () => {
  let homePage: HomePage;

  // Before each test, create a new instance of the HomePage object
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test("should have the correct page title", async ({ page }) => {
    await expect(page).toHaveTitle(/Crayon & Beyond - Activity books for kids/);
  });

  test("should display the main logo", async () => {
    await homePage.assertLogoIsVisible();
  });

  test("should display the main header", async () => {
    await homePage.assertMainHeadingIsDisplayed();
  });

  test("should display english as main language after acessing the page", async () => {
    await homePage.assertMainLanguageEnglish();
  });

  test("should display the nav bar and all main navigation links", async () => {
    await homePage.assertDesktopNavBarIsDisplayed();
  });

  test("should switch languages successfully", async () => {
    await homePage.assertLanguageIsSwitched();
  });
});

test.describe("Navigation", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test("should navigate to the About section successfully", async () => {
    await homePage.navigateTo("About");
    await homePage.assertAboutHeadingVisible();
  });

  test("should navigate to Projects section successfully", async () => {
    await homePage.navigateTo("Projects");
    await homePage.assertProjectsHeadingVisible();
  });
});

test.describe("Projects section", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
    await homePage.navigateTo("Projects");
  });

  test("should display projects section", async () => {
    await homePage.assertProjectsGridVisible();
  });

  test("should display all projects", async () => {
    await homePage.assertAllProjectsVisible();
  });

  test("should display project preview after clicking the project card", async () => {
    await homePage.assertProjectPreviewVisibleOnClick();
  });

  test("should close project preview after clicking first close button", async () => {
    await homePage.assertProjectPreviewNotVisibleCloseUpButton();
  });

  test("should close project preview after clicking second close button", async () => {
    await homePage.assertProjectPreviewNotVisibleCloseDownButton();
  });

  test("should redirect to gumroad product page", async () => {
    await homePage.assertBuyButtonFromPreviewVisible();
    await homePage.assertBuyButtonPreviewRedirectsCorrectly();
  });
});

test.describe("Pricing section", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
    await homePage.navigateTo("Pricing");
  });

  test("should display pricing section correctly", async () => {
    await homePage.assertPricingNoticeVisible();
    await homePage.assertAllPricesVisible();
    await homePage.assertExpandPrice();
  });

  test("should redirect to gumroad product section", async () => {
    await homePage.assertBuyButtonPricingRedirectsCorrectly();
  });
});
