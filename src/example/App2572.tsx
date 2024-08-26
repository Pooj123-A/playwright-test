
import { test, expect } from "@playwright/experimental-ct-react";
import App2572 from "./App2572.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2572 />);
  await expect(component).toContainText("Learn React");
});
