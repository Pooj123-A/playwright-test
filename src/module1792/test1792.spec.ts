
import { test, expect } from "@playwright/experimental-ct-react";
import App1792 from "./App1792.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1792 />);
  await expect(component).toContainText("Learn React");
});
