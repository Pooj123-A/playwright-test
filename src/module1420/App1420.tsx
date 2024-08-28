
import { test, expect } from "@playwright/experimental-ct-react";
import App1420 from "./App1420.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1420 />);
  await expect(component).toContainText("Learn React");
});
