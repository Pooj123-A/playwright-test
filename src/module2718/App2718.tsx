
import { test, expect } from "@playwright/experimental-ct-react";
import App2718 from "./App2718.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2718 />);
  await expect(component).toContainText("Learn React");
});
