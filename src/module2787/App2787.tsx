
import { test, expect } from "@playwright/experimental-ct-react";
import App2787 from "./App2787.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2787 />);
  await expect(component).toContainText("Learn React");
});
