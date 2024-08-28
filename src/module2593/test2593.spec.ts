
import { test, expect } from "@playwright/experimental-ct-react";
import App2593 from "./App2593.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2593 />);
  await expect(component).toContainText("Learn React");
});
