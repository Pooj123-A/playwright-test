
import { test, expect } from "@playwright/experimental-ct-react";
import App504 from "./App504.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App504 />);
  await expect(component).toContainText("Learn React");
});
