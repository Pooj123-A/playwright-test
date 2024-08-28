
import { test, expect } from "@playwright/experimental-ct-react";
import App1640 from "./App1640.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1640 />);
  await expect(component).toContainText("Learn React");
});
