
import { test, expect } from "@playwright/experimental-ct-react";
import App1511 from "./App1511.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1511 />);
  await expect(component).toContainText("Learn React");
});
