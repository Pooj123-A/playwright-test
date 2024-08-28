
import { test, expect } from "@playwright/experimental-ct-react";
import App2271 from "./App2271.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2271 />);
  await expect(component).toContainText("Learn React");
});
