
import { test, expect } from "@playwright/experimental-ct-react";
import App130 from "./App130.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App130 />);
  await expect(component).toContainText("Learn React");
});
