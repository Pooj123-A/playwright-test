
import { test, expect } from "@playwright/experimental-ct-react";
import App1354 from "./App1354.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1354 />);
  await expect(component).toContainText("Learn React");
});
