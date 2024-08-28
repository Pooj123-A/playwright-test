
import { test, expect } from "@playwright/experimental-ct-react";
import App1392 from "./App1392.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1392 />);
  await expect(component).toContainText("Learn React");
});
