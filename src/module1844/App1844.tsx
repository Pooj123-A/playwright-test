
import { test, expect } from "@playwright/experimental-ct-react";
import App1844 from "./App1844.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1844 />);
  await expect(component).toContainText("Learn React");
});
