
import { test, expect } from "@playwright/experimental-ct-react";
import App2409 from "./App2409.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2409 />);
  await expect(component).toContainText("Learn React");
});
