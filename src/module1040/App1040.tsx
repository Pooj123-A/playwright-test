
import { test, expect } from "@playwright/experimental-ct-react";
import App1040 from "./App1040.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1040 />);
  await expect(component).toContainText("Learn React");
});
