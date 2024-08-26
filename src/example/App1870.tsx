
import { test, expect } from "@playwright/experimental-ct-react";
import App1870 from "./App1870.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1870 />);
  await expect(component).toContainText("Learn React");
});
