
import { test, expect } from "@playwright/experimental-ct-react";
import App1763 from "./App1763.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1763 />);
  await expect(component).toContainText("Learn React");
});
