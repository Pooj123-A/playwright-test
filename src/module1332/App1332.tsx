
import { test, expect } from "@playwright/experimental-ct-react";
import App1332 from "./App1332.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1332 />);
  await expect(component).toContainText("Learn React");
});
