
import { test, expect } from "@playwright/experimental-ct-react";
import App1780 from "./App1780.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1780 />);
  await expect(component).toContainText("Learn React");
});
