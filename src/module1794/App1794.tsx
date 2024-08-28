
import { test, expect } from "@playwright/experimental-ct-react";
import App1794 from "./App1794.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1794 />);
  await expect(component).toContainText("Learn React");
});
