
import { test, expect } from "@playwright/experimental-ct-react";
import App1001 from "./App1001.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1001 />);
  await expect(component).toContainText("Learn React");
});
