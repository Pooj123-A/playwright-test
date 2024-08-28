
import { test, expect } from "@playwright/experimental-ct-react";
import App1808 from "./App1808.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1808 />);
  await expect(component).toContainText("Learn React");
});
