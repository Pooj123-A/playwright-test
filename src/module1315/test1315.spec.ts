
import { test, expect } from "@playwright/experimental-ct-react";
import App1315 from "./App1315.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1315 />);
  await expect(component).toContainText("Learn React");
});
