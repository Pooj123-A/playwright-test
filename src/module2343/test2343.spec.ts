
import { test, expect } from "@playwright/experimental-ct-react";
import App2343 from "./App2343.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2343 />);
  await expect(component).toContainText("Learn React");
});
