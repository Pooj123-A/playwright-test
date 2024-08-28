
import { test, expect } from "@playwright/experimental-ct-react";
import App2314 from "./App2314.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2314 />);
  await expect(component).toContainText("Learn React");
});
