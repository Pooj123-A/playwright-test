
import { test, expect } from "@playwright/experimental-ct-react";
import App2763 from "./App2763.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2763 />);
  await expect(component).toContainText("Learn React");
});
