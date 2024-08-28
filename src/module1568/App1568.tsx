
import { test, expect } from "@playwright/experimental-ct-react";
import App1568 from "./App1568.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1568 />);
  await expect(component).toContainText("Learn React");
});
