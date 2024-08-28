
import { test, expect } from "@playwright/experimental-ct-react";
import App1922 from "./App1922.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1922 />);
  await expect(component).toContainText("Learn React");
});