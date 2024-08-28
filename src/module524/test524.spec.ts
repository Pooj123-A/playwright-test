
import { test, expect } from "@playwright/experimental-ct-react";
import App524 from "./App524.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App524 />);
  await expect(component).toContainText("Learn React");
});
