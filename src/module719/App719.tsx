
import { test, expect } from "@playwright/experimental-ct-react";
import App719 from "./App719.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App719 />);
  await expect(component).toContainText("Learn React");
});
