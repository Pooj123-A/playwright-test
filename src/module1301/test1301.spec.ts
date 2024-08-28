
import { test, expect } from "@playwright/experimental-ct-react";
import App1301 from "./App1301.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1301 />);
  await expect(component).toContainText("Learn React");
});
