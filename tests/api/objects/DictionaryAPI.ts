import { APIRequestContext, APIResponse, expect } from "@playwright/test";

export class DictionaryAPI {
  constructor(private request: APIRequestContext) {}

  async getDefinition(word: string): Promise<APIResponse> {
    return await this.request.get(`${word}`);
  }

  async getFirstDefinition(word: string): Promise<string> {
    const response = await this.getDefinition(word);
    const data = await response.json();
    return data[0].meanings[0].definitions[0].definition;
  }

  async validateResponse(response: APIResponse) {
    expect(response.ok()).toBeTruthy();

    const contentType = response.headers()["content-type"];
    expect(contentType).toContain("application/json");

    const data = await response.json();
    const entry = data[0];

    expect(entry).toHaveProperty("word");
    expect(entry).toHaveProperty("meanings");

    // Check that at least one definition exists
    const firstMeaning = entry.meanings[0];
    expect(firstMeaning.definitions[0]).toHaveProperty("definition");

    // Content Quality Validation
    const definition = firstMeaning.definitions[0].definition;

    expect(definition).toMatch(/^[A-Z]/); // Starts with capital
    expect(definition.length).toBeGreaterThan(10); // Not too short

    return data;
  }
}
