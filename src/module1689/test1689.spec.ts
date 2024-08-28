
import { test, expect } from "@playwright/experimental-ct-react";
import App1689 from "./App1689.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1689 />);
  await expect(component).toContainText("Learn React");
});
