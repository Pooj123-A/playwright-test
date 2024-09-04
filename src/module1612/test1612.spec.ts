
import { test, expect } from "@playwright/experimental-ct-react";
import App1612 from "./App1612.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1612 />);
  await expect(component).toContainText("Learn React");
});
