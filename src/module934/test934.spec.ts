
import { test, expect } from "@playwright/experimental-ct-react";
import App934 from "./App934.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App934 />);
  await expect(component).toContainText("Learn React");
});
