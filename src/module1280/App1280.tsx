
import { test, expect } from "@playwright/experimental-ct-react";
import App1280 from "./App1280.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1280 />);
  await expect(component).toContainText("Learn React");
});
