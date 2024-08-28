
import { test, expect } from "@playwright/experimental-ct-react";
import App1262 from "./App1262.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1262 />);
  await expect(component).toContainText("Learn React");
});
