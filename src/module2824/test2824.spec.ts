
import { test, expect } from "@playwright/experimental-ct-react";
import App2824 from "./App2824.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2824 />);
  await expect(component).toContainText("Learn React");
});
