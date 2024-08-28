
import { test, expect } from "@playwright/experimental-ct-react";
import App1004 from "./App1004.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1004 />);
  await expect(component).toContainText("Learn React");
});
