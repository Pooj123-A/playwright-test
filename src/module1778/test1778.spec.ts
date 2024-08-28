
import { test, expect } from "@playwright/experimental-ct-react";
import App1778 from "./App1778.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1778 />);
  await expect(component).toContainText("Learn React");
});
