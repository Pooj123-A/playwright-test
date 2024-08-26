
import { test, expect } from "@playwright/experimental-ct-react";
import App34 from "./App34.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App34 />);
  await expect(component).toContainText("Learn React");
});
