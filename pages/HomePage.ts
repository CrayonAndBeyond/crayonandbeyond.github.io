import { expect, type Locator, type Page } from "@playwright/test";
import { url } from "node:inspector";

export class HomePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly mainHeading: Locator;
  readonly navBar: Locator;
  readonly homeLink: Locator;
  readonly aboutLink: Locator;
  readonly projectsLink: Locator;
  readonly pricingLink: Locator;
  readonly contactLink: Locator;
  readonly viewProjectsButton: Locator;
  readonly projectSectionHeading: Locator;
  readonly projectCards: Locator;
  readonly projectsGrid: Locator;
  readonly aboutHeading: Locator;
  readonly languageSwitcher: Locator;
  readonly projectPreviewCloseButtonUp: Locator;
  readonly projectPreviewCloseButtonDown: Locator;
  readonly buyButtonPreview: Locator;
  readonly firstPrice: Locator;
  readonly expandPrice: Locator;
  readonly prices: Locator;
  readonly pricingNotice: Locator;
  readonly priceDisclaimer: Locator;
  readonly priceDescription: Locator;
  readonly buyButtonPricing: Locator;

  constructor(page: Page) {
    this.page = page;

    // home page selectors
    this.logo = page.locator("#home").getByRole("img", { name: "Brand Logo" });
    this.mainHeading = page.locator("h1");
    this.navBar = page.getByRole("navigation");
    this.homeLink = this.navBar.getByRole("link", { name: "Home" });
    this.aboutLink = this.navBar.getByRole("link", { name: "About" });
    this.projectsLink = this.navBar.getByRole("link", { name: "Projects" });
    this.pricingLink = this.navBar.getByRole("link", { name: "Pricing" });
    this.contactLink = this.navBar.getByRole("link", { name: "Contact" });
    this.viewProjectsButton = page.getByRole("link", { name: "View projects" });
    this.languageSwitcher = page.getByRole("button", { name: "RO" });

    // about section locators
    this.aboutHeading = page.getByRole("heading", { name: "About me" });

    // projects section locators
    this.projectSectionHeading = page.getByRole("heading", {
      name: "Featured Projects",
    });
    this.projectsGrid = page.locator(".projects-grid");
    this.projectCards = this.projectsGrid.locator(".project-card");
    this.projectPreviewCloseButtonUp = page
      .getByRole("button", { name: "Close" })
      .first();
    this.projectPreviewCloseButtonDown = page
      .getByRole("button", { name: "Close" })
      .nth(1);
    this.buyButtonPreview = page.getByRole("link", {
      name: "🛒 Buy Now",
      exact: true,
    });

    // pricing section locators
    this.pricingNotice = page.locator(".pricing-notice");
    this.prices = page.locator(".pricing-item");
    this.expandPrice = page.getByText("▼").first();
    this.priceDisclaimer = page
      .getByText("*Price may vary at checkout")
      .first();
    this.priceDescription = page.locator(".pricing-description").first();
    this.buyButtonPricing = page
      .getByRole("link", { name: "🛒 Buy Now - $" })
      .first();
  }

  async goto() {
    await this.page.goto("/");
  }

  async navigateTo(linkText: string) {
    const linkLocator = this.navBar.getByRole("link", {
      name: linkText,
      exact: true,
    });
    await linkLocator.click();
  }

  async assertLogoIsVisible() {
    await expect(this.logo).toBeVisible();
  }

  async assertMainHeadingIsDisplayed() {
    await expect(this.mainHeading).toBeVisible();
  }

  async assertMainLanguageEnglish() {
    await expect(this.mainHeading).toHaveText(
      "Where education meets imagination"
    );
  }

  async assertDesktopNavBarIsDisplayed() {
    await expect(this.navBar).toBeVisible();
    await expect(this.aboutLink).toBeVisible();
    await expect(this.projectsLink).toBeVisible();
    await expect(this.pricingLink).toBeVisible();
    await expect(this.contactLink).toBeVisible();
  }

  async assertLanguageIsSwitched() {
    await this.languageSwitcher.click();
    await expect(this.mainHeading).toBeVisible();
    await expect(this.mainHeading).toHaveText(
      "Unde educația se întâlnește cu imaginația"
    );
  }

  async assertAboutHeadingVisible() {
    await expect(this.aboutHeading).toBeVisible();
  }

  async assertProjectsHeadingVisible() {
    await expect(this.projectSectionHeading).toBeVisible();
  }

  async assertProjectsGridVisible() {
    await expect(this.projectsGrid).toBeVisible();
  }

  async assertAllProjectsVisible() {
    // assert total number of projects
    const expectedProjectCount = 11;
    await expect(this.projectCards).toHaveCount(expectedProjectCount);

    //assert each project card is visible
    for (let i = 0; i < expectedProjectCount; i++) {
      await expect(this.projectCards.nth(i)).toBeVisible();
    }
  }

  async assertProjectPreviewVisibleOnClick() {
    const previewHeading = this.page.getByRole("heading", {
      name: "Learning letters - Preview",
    });
    await this.assertProjectsHeadingVisible();
    await this.page.getByRole("img", { name: "Learning letters" }).click();
    await expect(previewHeading).toBeVisible();
  }

  async assertProjectPreviewNotVisibleCloseUpButton() {
    const previewHeading = this.page.getByRole("heading", {
      name: "Learning numbers - Preview",
    });
    await this.assertProjectsHeadingVisible();
    await this.page.getByRole("img", { name: "Learning numbers" }).click();
    await expect(previewHeading).toBeVisible();
    await this.projectPreviewCloseButtonUp.click();
    await expect(previewHeading).not.toBeVisible();
  }

  async assertProjectPreviewNotVisibleCloseDownButton() {
    const previewHeading = this.page.getByRole("heading", {
      name: "Tiny books nature edition - Preview",
    });
    await this.assertProjectsHeadingVisible();
    await this.page
      .getByRole("img", { name: "Tiny Tales of Nature's Magic" })
      .click();
    await expect(previewHeading).toBeVisible();
    await this.projectPreviewCloseButtonDown.click();
    await expect(previewHeading).not.toBeVisible();
  }

  async assertBuyButtonFromPreviewVisible() {
    await this.page
      .getByRole("heading", { name: "Trace & Learn Activity Book" })
      .click();
    await this.assertProjectsHeadingVisible();

    await expect(this.buyButtonPreview).toBeVisible();
    await expect(this.buyButtonPreview).toBeEnabled();
  }

  async assertBuyButtonPreviewRedirectsCorrectly() {
    const gumroadPagePromise = this.page.waitForEvent("popup");
    await this.buyButtonPreview.click();
    const gumroadPage = await gumroadPagePromise;

    const actualUrl = gumroadPage.url();
    const expectedUrl = "https://crayonandbeyond.gumroad.com/l/backpack-fun";
    expect(expectedUrl).toBe(actualUrl);
  }

  async assertPricingNoticeVisible() {
    await expect(this.pricingNotice).toBeVisible();
  }

  async assertAllPricesVisible() {
    // assert total number of prices
    const expectedPricesCount = 7;
    await expect(this.prices).toHaveCount(expectedPricesCount);

    //assert each price is visible
    for (let i = 0; i < expectedPricesCount; i++) {
      await expect(this.prices.nth(i)).toBeVisible();
    }
  }

  async assertExpandPrice() {
    await expect(this.expandPrice).toBeVisible();
    await this.expandPrice.click();
    await expect(this.priceDisclaimer).toBeVisible();
    await expect(this.priceDescription).toBeVisible();
  }

  async assertBuyButtonPricingRedirectsCorrectly() {
    await expect(this.buyButtonPricing).toBeVisible();
    await expect(this.buyButtonPricing).toBeEnabled();

    const [gumroadPage] = await Promise.all([
      this.page.waitForEvent("popup"),
      this.buyButtonPricing.click(),
    ]);

    // Wait for the new page to stabilize before checking URL/content
    await gumroadPage.waitForLoadState("networkidle");

    const actualUrl = gumroadPage.url();
    const expectedBaseDomain = "https://crayonandbeyond.gumroad.com/";
    const expectedSectionQuery = "?section=hxii3z7kGLqD-405-5YOeg==";

    expect(actualUrl).toContain(expectedBaseDomain);
    expect(actualUrl).toContain(expectedSectionQuery);

    await expect(gumroadPage).toHaveTitle(/Crayon & Beyond/);

    const expectedSectionText =
      "🇬🇧 Activity books in English for children (2-5 years old)";

    const actualSectionLocator = gumroadPage.getByRole("heading", {
      name: "🇬🇧 Activity books in",
    });

    await expect(actualSectionLocator).toHaveText(expectedSectionText);

    // Clean up
    await gumroadPage.close();
  }
}
