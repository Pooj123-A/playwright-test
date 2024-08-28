
import { test, expect } from "@playwright/experimental-ct-react";
import App1602 from "./App1602.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1602 />);
  await expect(component).toContainText("Learn React");
});
