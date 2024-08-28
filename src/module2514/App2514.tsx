
import { test, expect } from "@playwright/experimental-ct-react";
import App2514 from "./App2514.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2514 />);
  await expect(component).toContainText("Learn React");
});