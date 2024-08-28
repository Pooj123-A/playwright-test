
import { test, expect } from "@playwright/experimental-ct-react";
import App2747 from "./App2747.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2747 />);
  await expect(component).toContainText("Learn React");
});
