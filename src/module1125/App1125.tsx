
import { test, expect } from "@playwright/experimental-ct-react";
import App1125 from "./App1125.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1125 />);
  await expect(component).toContainText("Learn React");
});
