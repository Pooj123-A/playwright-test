
import { test, expect } from "@playwright/experimental-ct-react";
import App399 from "./App399.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App399 />);
  await expect(component).toContainText("Learn React");
});