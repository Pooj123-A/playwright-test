
import { test, expect } from "@playwright/experimental-ct-react";
import App2660 from "./App2660.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2660 />);
  await expect(component).toContainText("Learn React");
});
