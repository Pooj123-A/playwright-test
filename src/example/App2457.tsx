
import { test, expect } from "@playwright/experimental-ct-react";
import App2457 from "./App2457.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2457 />);
  await expect(component).toContainText("Learn React");
});
