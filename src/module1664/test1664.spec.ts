
import { test, expect } from "@playwright/experimental-ct-react";
import App1664 from "./App1664.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1664 />);
  await expect(component).toContainText("Learn React");
});
