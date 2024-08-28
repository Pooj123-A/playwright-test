
import { test, expect } from "@playwright/experimental-ct-react";
import App1351 from "./App1351.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1351 />);
  await expect(component).toContainText("Learn React");
});
