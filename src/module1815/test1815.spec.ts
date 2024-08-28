
import { test, expect } from "@playwright/experimental-ct-react";
import App1815 from "./App1815.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1815 />);
  await expect(component).toContainText("Learn React");
});
