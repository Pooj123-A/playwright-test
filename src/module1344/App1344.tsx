
import { test, expect } from "@playwright/experimental-ct-react";
import App1344 from "./App1344.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1344 />);
  await expect(component).toContainText("Learn React");
});
