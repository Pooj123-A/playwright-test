
import { test, expect } from "@playwright/experimental-ct-react";
import App1642 from "./App1642.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1642 />);
  await expect(component).toContainText("Learn React");
});
