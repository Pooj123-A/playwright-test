
import { test, expect } from "@playwright/experimental-ct-react";
import App1458 from "./App1458.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1458 />);
  await expect(component).toContainText("Learn React");
});
