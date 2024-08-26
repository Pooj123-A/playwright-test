
import { test, expect } from "@playwright/experimental-ct-react";
import App2047 from "./App2047.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2047 />);
  await expect(component).toContainText("Learn React");
});