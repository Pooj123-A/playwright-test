
import { test, expect } from "@playwright/experimental-ct-react";
import App2491 from "./App2491.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2491 />);
  await expect(component).toContainText("Learn React");
});
