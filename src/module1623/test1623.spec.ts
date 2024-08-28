
import { test, expect } from "@playwright/experimental-ct-react";
import App1623 from "./App1623.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1623 />);
  await expect(component).toContainText("Learn React");
});
