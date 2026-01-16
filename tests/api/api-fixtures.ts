import { test as base } from "@playwright/test";
import { DictionaryAPI } from "./objects/DictionaryAPI";

type MyFixtures = {
  dictionaryApi: DictionaryAPI;
};

export const test = base.extend<MyFixtures>({
  dictionaryApi: async ({ request }, use) => {
    // Initialize the API object and pass it to the tests
    const dictionaryApi = new DictionaryAPI(request);
    await use(dictionaryApi);
  },
});

export { expect } from "@playwright/test";
