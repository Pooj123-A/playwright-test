
import { test, expect } from "@playwright/experimental-ct-react";
import App1481 from "./App1481.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1481 />);
  await expect(component).toContainText("Learn React");
});