
import { test, expect } from "@playwright/experimental-ct-react";
import App2878 from "./App2878.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2878 />);
  await expect(component).toContainText("Learn React");
});
