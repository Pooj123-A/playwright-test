
import { test, expect } from "@playwright/experimental-ct-react";
import App436 from "./App436.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App436 />);
  await expect(component).toContainText("Learn React");
});
