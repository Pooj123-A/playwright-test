
import { test, expect } from "@playwright/experimental-ct-react";
import App1299 from "./App1299.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1299 />);
  await expect(component).toContainText("Learn React");
});
