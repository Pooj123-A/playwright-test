
import { test, expect } from "@playwright/experimental-ct-react";
import App1461 from "./App1461.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1461 />);
  await expect(component).toContainText("Learn React");
});
