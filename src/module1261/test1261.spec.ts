
import { test, expect } from "@playwright/experimental-ct-react";
import App1261 from "./App1261.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1261 />);
  await expect(component).toContainText("Learn React");
});
