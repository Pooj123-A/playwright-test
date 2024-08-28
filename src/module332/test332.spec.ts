
import { test, expect } from "@playwright/experimental-ct-react";
import App332 from "./App332.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App332 />);
  await expect(component).toContainText("Learn React");
});
