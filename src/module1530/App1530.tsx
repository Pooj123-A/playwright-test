
import { test, expect } from "@playwright/experimental-ct-react";
import App1530 from "./App1530.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1530 />);
  await expect(component).toContainText("Learn React");
});
