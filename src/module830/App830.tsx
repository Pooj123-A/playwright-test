
import { test, expect } from "@playwright/experimental-ct-react";
import App830 from "./App830.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App830 />);
  await expect(component).toContainText("Learn React");
});
