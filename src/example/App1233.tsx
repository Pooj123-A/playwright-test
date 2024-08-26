
import { test, expect } from "@playwright/experimental-ct-react";
import App1233 from "./App1233.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1233 />);
  await expect(component).toContainText("Learn React");
});
