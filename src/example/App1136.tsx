
import { test, expect } from "@playwright/experimental-ct-react";
import App1136 from "./App1136.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1136 />);
  await expect(component).toContainText("Learn React");
});
