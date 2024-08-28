
import { test, expect } from "@playwright/experimental-ct-react";
import App1917 from "./App1917.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1917 />);
  await expect(component).toContainText("Learn React");
});
