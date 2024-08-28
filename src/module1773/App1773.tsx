
import { test, expect } from "@playwright/experimental-ct-react";
import App1773 from "./App1773.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1773 />);
  await expect(component).toContainText("Learn React");
});
