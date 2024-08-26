
import { test, expect } from "@playwright/experimental-ct-react";
import App1610 from "./App1610.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1610 />);
  await expect(component).toContainText("Learn React");
});
