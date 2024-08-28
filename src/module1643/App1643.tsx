
import { test, expect } from "@playwright/experimental-ct-react";
import App1643 from "./App1643.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1643 />);
  await expect(component).toContainText("Learn React");
});
