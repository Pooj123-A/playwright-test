
import { test, expect } from "@playwright/experimental-ct-react";
import App2050 from "./App2050.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2050 />);
  await expect(component).toContainText("Learn React");
});
