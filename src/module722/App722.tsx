
import { test, expect } from "@playwright/experimental-ct-react";
import App722 from "./App722.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App722 />);
  await expect(component).toContainText("Learn React");
});
