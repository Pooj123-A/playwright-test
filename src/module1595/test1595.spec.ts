
import { test, expect } from "@playwright/experimental-ct-react";
import App1595 from "./App1595.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1595 />);
  await expect(component).toContainText("Learn React");
});
