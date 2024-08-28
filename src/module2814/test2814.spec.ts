
import { test, expect } from "@playwright/experimental-ct-react";
import App2814 from "./App2814.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2814 />);
  await expect(component).toContainText("Learn React");
});
