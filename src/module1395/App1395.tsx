
import { test, expect } from "@playwright/experimental-ct-react";
import App1395 from "./App1395.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1395 />);
  await expect(component).toContainText("Learn React");
});
