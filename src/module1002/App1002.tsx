
import { test, expect } from "@playwright/experimental-ct-react";
import App1002 from "./App1002.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1002 />);
  await expect(component).toContainText("Learn React");
});
