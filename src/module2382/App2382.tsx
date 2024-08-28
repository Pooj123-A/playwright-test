
import { test, expect } from "@playwright/experimental-ct-react";
import App2382 from "./App2382.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2382 />);
  await expect(component).toContainText("Learn React");
});
