
import { test, expect } from "@playwright/experimental-ct-react";
import App1217 from "./App1217.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1217 />);
  await expect(component).toContainText("Learn React");
});
