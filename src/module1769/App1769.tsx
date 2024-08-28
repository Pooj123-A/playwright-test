
import { test, expect } from "@playwright/experimental-ct-react";
import App1769 from "./App1769.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1769 />);
  await expect(component).toContainText("Learn React");
});
