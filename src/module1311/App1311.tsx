
import { test, expect } from "@playwright/experimental-ct-react";
import App1311 from "./App1311.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1311 />);
  await expect(component).toContainText("Learn React");
});
