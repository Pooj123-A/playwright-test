
import { test, expect } from "@playwright/experimental-ct-react";
import App1405 from "./App1405.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1405 />);
  await expect(component).toContainText("Learn React");
});
