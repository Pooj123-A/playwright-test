
import { test, expect } from "@playwright/experimental-ct-react";
import App1115 from "./App1115.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1115 />);
  await expect(component).toContainText("Learn React");
});
