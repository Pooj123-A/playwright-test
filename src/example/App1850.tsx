
import { test, expect } from "@playwright/experimental-ct-react";
import App1850 from "./App1850.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1850 />);
  await expect(component).toContainText("Learn React");
});
