
import { test, expect } from "@playwright/experimental-ct-react";
import App292 from "./App292.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App292 />);
  await expect(component).toContainText("Learn React");
});
