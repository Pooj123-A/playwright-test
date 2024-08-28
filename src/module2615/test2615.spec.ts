
import { test, expect } from "@playwright/experimental-ct-react";
import App2615 from "./App2615.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2615 />);
  await expect(component).toContainText("Learn React");
});
