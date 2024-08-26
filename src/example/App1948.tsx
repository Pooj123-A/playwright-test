
import { test, expect } from "@playwright/experimental-ct-react";
import App1948 from "./App1948.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1948 />);
  await expect(component).toContainText("Learn React");
});
