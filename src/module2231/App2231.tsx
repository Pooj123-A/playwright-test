
import { test, expect } from "@playwright/experimental-ct-react";
import App2231 from "./App2231.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2231 />);
  await expect(component).toContainText("Learn React");
});
