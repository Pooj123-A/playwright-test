
import { test, expect } from "@playwright/experimental-ct-react";
import App1473 from "./App1473.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1473 />);
  await expect(component).toContainText("Learn React");
});
