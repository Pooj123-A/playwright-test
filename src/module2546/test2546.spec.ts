
import { test, expect } from "@playwright/experimental-ct-react";
import App2546 from "./App2546.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2546 />);
  await expect(component).toContainText("Learn React");
});
