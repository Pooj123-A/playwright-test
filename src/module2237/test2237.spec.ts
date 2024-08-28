
import { test, expect } from "@playwright/experimental-ct-react";
import App2237 from "./App2237.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2237 />);
  await expect(component).toContainText("Learn React");
});
