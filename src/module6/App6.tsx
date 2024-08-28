
import { test, expect } from "@playwright/experimental-ct-react";
import App6 from "./App6.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App6 />);
  await expect(component).toContainText("Learn React");
});
