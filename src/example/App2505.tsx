
import { test, expect } from "@playwright/experimental-ct-react";
import App2505 from "./App2505.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2505 />);
  await expect(component).toContainText("Learn React");
});
