
import { test, expect } from "@playwright/experimental-ct-react";
import App822 from "./App822.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App822 />);
  await expect(component).toContainText("Learn React");
});
