
import { test, expect } from "@playwright/experimental-ct-react";
import App1232 from "./App1232.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1232 />);
  await expect(component).toContainText("Learn React");
});
