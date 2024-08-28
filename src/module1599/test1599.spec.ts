
import { test, expect } from "@playwright/experimental-ct-react";
import App1599 from "./App1599.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1599 />);
  await expect(component).toContainText("Learn React");
});
