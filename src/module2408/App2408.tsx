
import { test, expect } from "@playwright/experimental-ct-react";
import App2408 from "./App2408.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2408 />);
  await expect(component).toContainText("Learn React");
});
