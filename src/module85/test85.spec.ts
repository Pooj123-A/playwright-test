
import { test, expect } from "@playwright/experimental-ct-react";
import App85 from "./App85.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App85 />);
  await expect(component).toContainText("Learn React");
});
