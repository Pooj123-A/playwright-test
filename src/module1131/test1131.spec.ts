
import { test, expect } from "@playwright/experimental-ct-react";
import App1131 from "./App1131.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1131 />);
  await expect(component).toContainText("Learn React");
});
