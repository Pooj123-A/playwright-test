
import { test, expect } from "@playwright/experimental-ct-react";
import App1932 from "./App1932.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1932 />);
  await expect(component).toContainText("Learn React");
});
