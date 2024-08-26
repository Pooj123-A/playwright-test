
import { test, expect } from "@playwright/experimental-ct-react";
import App1715 from "./App1715.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1715 />);
  await expect(component).toContainText("Learn React");
});
