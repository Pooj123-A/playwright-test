
import { test, expect } from "@playwright/experimental-ct-react";
import App400 from "./App400.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App400 />);
  await expect(component).toContainText("Learn React");
});
