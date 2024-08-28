
import { test, expect } from "@playwright/experimental-ct-react";
import App1919 from "./App1919.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1919 />);
  await expect(component).toContainText("Learn React");
});
