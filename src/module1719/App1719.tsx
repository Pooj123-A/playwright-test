
import { test, expect } from "@playwright/experimental-ct-react";
import App1719 from "./App1719.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1719 />);
  await expect(component).toContainText("Learn React");
});
