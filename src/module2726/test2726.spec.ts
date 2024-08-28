
import { test, expect } from "@playwright/experimental-ct-react";
import App2726 from "./App2726.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2726 />);
  await expect(component).toContainText("Learn React");
});
