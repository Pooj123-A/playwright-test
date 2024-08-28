
import { test, expect } from "@playwright/experimental-ct-react";
import App2518 from "./App2518.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2518 />);
  await expect(component).toContainText("Learn React");
});
