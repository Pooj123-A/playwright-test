
import { test, expect } from "@playwright/experimental-ct-react";
import App2802 from "./App2802.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2802 />);
  await expect(component).toContainText("Learn React");
});
