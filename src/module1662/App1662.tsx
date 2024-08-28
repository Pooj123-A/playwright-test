
import { test, expect } from "@playwright/experimental-ct-react";
import App1662 from "./App1662.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1662 />);
  await expect(component).toContainText("Learn React");
});
