
import { test, expect } from "@playwright/experimental-ct-react";
import App2499 from "./App2499.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2499 />);
  await expect(component).toContainText("Learn React");
});
