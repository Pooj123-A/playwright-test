
import { test, expect } from "@playwright/experimental-ct-react";
import App1378 from "./App1378.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1378 />);
  await expect(component).toContainText("Learn React");
});
