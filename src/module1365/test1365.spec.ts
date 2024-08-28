
import { test, expect } from "@playwright/experimental-ct-react";
import App1365 from "./App1365.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1365 />);
  await expect(component).toContainText("Learn React");
});
