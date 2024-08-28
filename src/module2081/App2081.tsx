
import { test, expect } from "@playwright/experimental-ct-react";
import App2081 from "./App2081.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2081 />);
  await expect(component).toContainText("Learn React");
});
