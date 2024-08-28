
import { test, expect } from "@playwright/experimental-ct-react";
import App1811 from "./App1811.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1811 />);
  await expect(component).toContainText("Learn React");
});
