
import { test, expect } from "@playwright/experimental-ct-react";
import App2584 from "./App2584.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2584 />);
  await expect(component).toContainText("Learn React");
});
