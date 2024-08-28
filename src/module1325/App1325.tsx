
import { test, expect } from "@playwright/experimental-ct-react";
import App1325 from "./App1325.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1325 />);
  await expect(component).toContainText("Learn React");
});
