
import { test, expect } from "@playwright/experimental-ct-react";
import App1470 from "./App1470.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1470 />);
  await expect(component).toContainText("Learn React");
});
