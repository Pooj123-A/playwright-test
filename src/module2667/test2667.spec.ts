
import { test, expect } from "@playwright/experimental-ct-react";
import App2667 from "./App2667.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2667 />);
  await expect(component).toContainText("Learn React");
});
