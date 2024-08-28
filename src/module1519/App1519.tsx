
import { test, expect } from "@playwright/experimental-ct-react";
import App1519 from "./App1519.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1519 />);
  await expect(component).toContainText("Learn React");
});
