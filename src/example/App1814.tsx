
import { test, expect } from "@playwright/experimental-ct-react";
import App1814 from "./App1814.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1814 />);
  await expect(component).toContainText("Learn React");
});
