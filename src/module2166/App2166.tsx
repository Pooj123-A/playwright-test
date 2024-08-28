
import { test, expect } from "@playwright/experimental-ct-react";
import App2166 from "./App2166.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2166 />);
  await expect(component).toContainText("Learn React");
});
