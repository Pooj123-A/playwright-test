
import { test, expect } from "@playwright/experimental-ct-react";
import App84 from "./App84.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App84 />);
  await expect(component).toContainText("Learn React");
});
