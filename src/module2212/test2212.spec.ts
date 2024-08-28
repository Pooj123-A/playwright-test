
import { test, expect } from "@playwright/experimental-ct-react";
import App2212 from "./App2212.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2212 />);
  await expect(component).toContainText("Learn React");
});
