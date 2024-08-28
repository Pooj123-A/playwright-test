
import { test, expect } from "@playwright/experimental-ct-react";
import App2469 from "./App2469.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2469 />);
  await expect(component).toContainText("Learn React");
});
