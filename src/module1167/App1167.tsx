
import { test, expect } from "@playwright/experimental-ct-react";
import App1167 from "./App1167.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1167 />);
  await expect(component).toContainText("Learn React");
});
