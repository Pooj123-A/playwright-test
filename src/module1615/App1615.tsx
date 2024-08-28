
import { test, expect } from "@playwright/experimental-ct-react";
import App1615 from "./App1615.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1615 />);
  await expect(component).toContainText("Learn React");
});
