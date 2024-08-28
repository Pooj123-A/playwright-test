
import { test, expect } from "@playwright/experimental-ct-react";
import App1802 from "./App1802.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1802 />);
  await expect(component).toContainText("Learn React");
});
