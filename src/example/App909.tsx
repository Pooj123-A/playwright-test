
import { test, expect } from "@playwright/experimental-ct-react";
import App909 from "./App909.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App909 />);
  await expect(component).toContainText("Learn React");
});
