
import { test, expect } from "@playwright/experimental-ct-react";
import App2130 from "./App2130.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2130 />);
  await expect(component).toContainText("Learn React");
});
