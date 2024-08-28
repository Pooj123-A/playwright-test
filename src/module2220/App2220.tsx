
import { test, expect } from "@playwright/experimental-ct-react";
import App2220 from "./App2220.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2220 />);
  await expect(component).toContainText("Learn React");
});
