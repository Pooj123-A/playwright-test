
import { test, expect } from "@playwright/experimental-ct-react";
import App2776 from "./App2776.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2776 />);
  await expect(component).toContainText("Learn React");
});
