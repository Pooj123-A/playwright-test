
import { test, expect } from "@playwright/experimental-ct-react";
import App1862 from "./App1862.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1862 />);
  await expect(component).toContainText("Learn React");
});
