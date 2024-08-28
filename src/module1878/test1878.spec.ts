
import { test, expect } from "@playwright/experimental-ct-react";
import App1878 from "./App1878.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1878 />);
  await expect(component).toContainText("Learn React");
});
