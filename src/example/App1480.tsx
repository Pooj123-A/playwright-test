
import { test, expect } from "@playwright/experimental-ct-react";
import App1480 from "./App1480.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1480 />);
  await expect(component).toContainText("Learn React");
});
