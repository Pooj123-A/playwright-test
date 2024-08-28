
import { test, expect } from "@playwright/experimental-ct-react";
import App1439 from "./App1439.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1439 />);
  await expect(component).toContainText("Learn React");
});
