
import { test, expect } from "@playwright/experimental-ct-react";
import App1429 from "./App1429.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1429 />);
  await expect(component).toContainText("Learn React");
});
