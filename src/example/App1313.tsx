
import { test, expect } from "@playwright/experimental-ct-react";
import App1313 from "./App1313.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1313 />);
  await expect(component).toContainText("Learn React");
});
