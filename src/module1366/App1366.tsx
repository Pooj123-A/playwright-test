
import { test, expect } from "@playwright/experimental-ct-react";
import App1366 from "./App1366.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1366 />);
  await expect(component).toContainText("Learn React");
});
