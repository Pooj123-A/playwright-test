
import { test, expect } from "@playwright/experimental-ct-react";
import App41 from "./App41.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App41 />);
  await expect(component).toContainText("Learn React");
});
