
import { test, expect } from "@playwright/experimental-ct-react";
import App1638 from "./App1638.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1638 />);
  await expect(component).toContainText("Learn React");
});
