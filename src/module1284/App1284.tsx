
import { test, expect } from "@playwright/experimental-ct-react";
import App1284 from "./App1284.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1284 />);
  await expect(component).toContainText("Learn React");
});
