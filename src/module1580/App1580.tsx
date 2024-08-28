
import { test, expect } from "@playwright/experimental-ct-react";
import App1580 from "./App1580.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1580 />);
  await expect(component).toContainText("Learn React");
});
