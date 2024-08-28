
import { test, expect } from "@playwright/experimental-ct-react";
import App1625 from "./App1625.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1625 />);
  await expect(component).toContainText("Learn React");
});
