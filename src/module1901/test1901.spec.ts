
import { test, expect } from "@playwright/experimental-ct-react";
import App1901 from "./App1901.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1901 />);
  await expect(component).toContainText("Learn React");
});
