
import { test, expect } from "@playwright/experimental-ct-react";
import App1423 from "./App1423.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1423 />);
  await expect(component).toContainText("Learn React");
});
