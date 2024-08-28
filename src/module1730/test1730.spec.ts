
import { test, expect } from "@playwright/experimental-ct-react";
import App1730 from "./App1730.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1730 />);
  await expect(component).toContainText("Learn React");
});
