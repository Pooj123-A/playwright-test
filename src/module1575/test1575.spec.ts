
import { test, expect } from "@playwright/experimental-ct-react";
import App1575 from "./App1575.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1575 />);
  await expect(component).toContainText("Learn React");
});