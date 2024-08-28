
import { test, expect } from "@playwright/experimental-ct-react";
import App2920 from "./App2920.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2920 />);
  await expect(component).toContainText("Learn React");
});
