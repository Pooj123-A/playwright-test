
import { test, expect } from "@playwright/experimental-ct-react";
import App2254 from "./App2254.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2254 />);
  await expect(component).toContainText("Learn React");
});
