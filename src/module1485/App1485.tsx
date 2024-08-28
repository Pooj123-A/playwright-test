
import { test, expect } from "@playwright/experimental-ct-react";
import App1485 from "./App1485.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1485 />);
  await expect(component).toContainText("Learn React");
});
