
import { test, expect } from "@playwright/experimental-ct-react";
import App2150 from "./App2150.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2150 />);
  await expect(component).toContainText("Learn React");
});
