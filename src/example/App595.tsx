
import { test, expect } from "@playwright/experimental-ct-react";
import App595 from "./App595.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App595 />);
  await expect(component).toContainText("Learn React");
});
