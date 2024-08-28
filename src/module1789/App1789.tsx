
import { test, expect } from "@playwright/experimental-ct-react";
import App1789 from "./App1789.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1789 />);
  await expect(component).toContainText("Learn React");
});
