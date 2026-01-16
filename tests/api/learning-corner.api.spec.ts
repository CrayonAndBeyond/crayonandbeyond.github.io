import { test, expect } from "./api-fixtures";

test.describe.serial("Dictionary API - Learning Corner", () => {
  test.beforeEach(async () => {
    // Helper to wait between tests to avoid 429 Rate Limiting
    await new Promise((res) => setTimeout(res, 500));
  });

  test("Valid word should return complete data structure", async ({
    dictionaryApi,
  }) => {
    const response = await dictionaryApi.getDefinition("curious");
    const data = await dictionaryApi.validateResponse(response);
    expect(data[0].word.toLowerCase()).toBe("curious");
  });

  test("Error handling for invalid and special characters", async ({
    dictionaryApi,
  }) => {
    const invalidWords = ["xyzabc123notaword", "@#$%", "12345"];

    for (const word of invalidWords) {
      const response = await dictionaryApi.getDefinition(word);
      expect(response.status()).toBe(404);
    }
  });

  test("Bulk word validation", async ({ dictionaryApi }) => {
    const sampleWords = ["imagine", "explore", "create"];

    for (const word of sampleWords) {
      const response = await dictionaryApi.getDefinition(word);
      const data = await dictionaryApi.validateResponse(response);
      expect(data[0].word.toLowerCase()).toBe(word);
    }
  });

  test("Performance: API response time", async ({ dictionaryApi }) => {
    const start = Date.now();
    const response = await dictionaryApi.getDefinition("curious");
    const duration = Date.now() - start;

    expect(response.ok()).toBeTruthy();
    expect(duration).toBeLessThan(3000);
  });
});
