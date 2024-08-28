
import { test, expect } from "@playwright/experimental-ct-react";
import App1694 from "./App1694.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1694 />);
  await expect(component).toContainText("Learn React");
});
