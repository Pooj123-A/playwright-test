
import { test, expect } from "@playwright/experimental-ct-react";
import App208 from "./App208.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App208 />);
  await expect(component).toContainText("Learn React");
});
