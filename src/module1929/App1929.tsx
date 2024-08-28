
import { test, expect } from "@playwright/experimental-ct-react";
import App1929 from "./App1929.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1929 />);
  await expect(component).toContainText("Learn React");
});
