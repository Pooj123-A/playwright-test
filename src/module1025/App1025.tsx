
import { test, expect } from "@playwright/experimental-ct-react";
import App1025 from "./App1025.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1025 />);
  await expect(component).toContainText("Learn React");
});
