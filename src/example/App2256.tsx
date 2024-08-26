
import { test, expect } from "@playwright/experimental-ct-react";
import App2256 from "./App2256.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2256 />);
  await expect(component).toContainText("Learn React");
});
