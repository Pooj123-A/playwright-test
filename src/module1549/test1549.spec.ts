
import { test, expect } from "@playwright/experimental-ct-react";
import App1549 from "./App1549.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1549 />);
  await expect(component).toContainText("Learn React");
});
