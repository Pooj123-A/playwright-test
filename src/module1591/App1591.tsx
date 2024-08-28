
import { test, expect } from "@playwright/experimental-ct-react";
import App1591 from "./App1591.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1591 />);
  await expect(component).toContainText("Learn React");
});
