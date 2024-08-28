
import { test, expect } from "@playwright/experimental-ct-react";
import App1243 from "./App1243.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1243 />);
  await expect(component).toContainText("Learn React");
});
