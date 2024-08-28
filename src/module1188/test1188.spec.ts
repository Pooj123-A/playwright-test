
import { test, expect } from "@playwright/experimental-ct-react";
import App1188 from "./App1188.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1188 />);
  await expect(component).toContainText("Learn React");
});
