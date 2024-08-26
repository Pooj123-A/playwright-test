
import { test, expect } from "@playwright/experimental-ct-react";
import App1910 from "./App1910.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1910 />);
  await expect(component).toContainText("Learn React");
});
