
import { test, expect } from "@playwright/experimental-ct-react";
import App1554 from "./App1554.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1554 />);
  await expect(component).toContainText("Learn React");
});
