
import { test, expect } from "@playwright/experimental-ct-react";
import App190 from "./App190.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App190 />);
  await expect(component).toContainText("Learn React");
});
