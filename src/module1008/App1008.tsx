
import { test, expect } from "@playwright/experimental-ct-react";
import App1008 from "./App1008.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1008 />);
  await expect(component).toContainText("Learn React");
});
