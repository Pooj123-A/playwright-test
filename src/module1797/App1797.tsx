
import { test, expect } from "@playwright/experimental-ct-react";
import App1797 from "./App1797.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1797 />);
  await expect(component).toContainText("Learn React");
});
