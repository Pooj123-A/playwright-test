
import { test, expect } from "@playwright/experimental-ct-react";
import App1824 from "./App1824.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1824 />);
  await expect(component).toContainText("Learn React");
});
