
import { test, expect } from "@playwright/experimental-ct-react";
import App1920 from "./App1920.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1920 />);
  await expect(component).toContainText("Learn React");
});
