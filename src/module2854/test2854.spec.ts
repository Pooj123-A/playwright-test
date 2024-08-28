
import { test, expect } from "@playwright/experimental-ct-react";
import App2854 from "./App2854.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2854 />);
  await expect(component).toContainText("Learn React");
});
