
import { test, expect } from "@playwright/experimental-ct-react";
import App277 from "./App277.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App277 />);
  await expect(component).toContainText("Learn React");
});
