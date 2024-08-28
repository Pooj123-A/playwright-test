
import { test, expect } from "@playwright/experimental-ct-react";
import App441 from "./App441.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App441 />);
  await expect(component).toContainText("Learn React");
});
