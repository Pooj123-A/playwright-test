
import { test, expect } from "@playwright/experimental-ct-react";
import App2411 from "./App2411.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2411 />);
  await expect(component).toContainText("Learn React");
});
