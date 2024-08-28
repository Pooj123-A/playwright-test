
import { test, expect } from "@playwright/experimental-ct-react";
import App1914 from "./App1914.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1914 />);
  await expect(component).toContainText("Learn React");
});
