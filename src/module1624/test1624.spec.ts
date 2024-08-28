
import { test, expect } from "@playwright/experimental-ct-react";
import App1624 from "./App1624.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1624 />);
  await expect(component).toContainText("Learn React");
});
