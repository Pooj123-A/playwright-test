
import { test, expect } from "@playwright/experimental-ct-react";
import App1438 from "./App1438.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1438 />);
  await expect(component).toContainText("Learn React");
});
