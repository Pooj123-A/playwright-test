
import { test, expect } from "@playwright/experimental-ct-react";
import App1790 from "./App1790.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1790 />);
  await expect(component).toContainText("Learn React");
});
