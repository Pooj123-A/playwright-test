
import { test, expect } from "@playwright/experimental-ct-react";
import App1947 from "./App1947.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1947 />);
  await expect(component).toContainText("Learn React");
});
