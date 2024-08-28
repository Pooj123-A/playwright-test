
import { test, expect } from "@playwright/experimental-ct-react";
import App2694 from "./App2694.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2694 />);
  await expect(component).toContainText("Learn React");
});
