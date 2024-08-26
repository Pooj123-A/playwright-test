
import { test, expect } from "@playwright/experimental-ct-react";
import App1550 from "./App1550.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1550 />);
  await expect(component).toContainText("Learn React");
});
