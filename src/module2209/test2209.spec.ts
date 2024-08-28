
import { test, expect } from "@playwright/experimental-ct-react";
import App2209 from "./App2209.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2209 />);
  await expect(component).toContainText("Learn React");
});
