
import { test, expect } from "@playwright/experimental-ct-react";
import App226 from "./App226.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App226 />);
  await expect(component).toContainText("Learn React");
});
