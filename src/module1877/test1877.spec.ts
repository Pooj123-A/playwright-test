
import { test, expect } from "@playwright/experimental-ct-react";
import App1877 from "./App1877.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1877 />);
  await expect(component).toContainText("Learn React");
});
