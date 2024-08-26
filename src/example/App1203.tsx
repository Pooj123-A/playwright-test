
import { test, expect } from "@playwright/experimental-ct-react";
import App1203 from "./App1203.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1203 />);
  await expect(component).toContainText("Learn React");
});
