
import { test, expect } from "@playwright/experimental-ct-react";
import App580 from "./App580.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App580 />);
  await expect(component).toContainText("Learn React");
});
