
import { test, expect } from "@playwright/experimental-ct-react";
import App382 from "./App382.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App382 />);
  await expect(component).toContainText("Learn React");
});
