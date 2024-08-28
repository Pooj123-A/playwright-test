
import { test, expect } from "@playwright/experimental-ct-react";
import App1117 from "./App1117.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1117 />);
  await expect(component).toContainText("Learn React");
});
