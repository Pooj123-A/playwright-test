
import { test, expect } from "@playwright/experimental-ct-react";
import App963 from "./App963.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App963 />);
  await expect(component).toContainText("Learn React");
});
