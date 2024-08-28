
import { test, expect } from "@playwright/experimental-ct-react";
import App2259 from "./App2259.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2259 />);
  await expect(component).toContainText("Learn React");
});
