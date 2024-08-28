
import { test, expect } from "@playwright/experimental-ct-react";
import App1766 from "./App1766.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1766 />);
  await expect(component).toContainText("Learn React");
});
