
import { test, expect } from "@playwright/experimental-ct-react";
import App2631 from "./App2631.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2631 />);
  await expect(component).toContainText("Learn React");
});
