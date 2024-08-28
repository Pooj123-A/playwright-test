
import { test, expect } from "@playwright/experimental-ct-react";
import App1904 from "./App1904.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1904 />);
  await expect(component).toContainText("Learn React");
});
