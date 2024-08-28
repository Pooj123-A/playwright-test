
import { test, expect } from "@playwright/experimental-ct-react";
import App1100 from "./App1100.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1100 />);
  await expect(component).toContainText("Learn React");
});
