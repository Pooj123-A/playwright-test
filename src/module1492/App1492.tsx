
import { test, expect } from "@playwright/experimental-ct-react";
import App1492 from "./App1492.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1492 />);
  await expect(component).toContainText("Learn React");
});
