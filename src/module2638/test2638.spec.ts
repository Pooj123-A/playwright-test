
import { test, expect } from "@playwright/experimental-ct-react";
import App2638 from "./App2638.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2638 />);
  await expect(component).toContainText("Learn React");
});
