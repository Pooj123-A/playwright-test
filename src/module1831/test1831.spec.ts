
import { test, expect } from "@playwright/experimental-ct-react";
import App1831 from "./App1831.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1831 />);
  await expect(component).toContainText("Learn React");
});
