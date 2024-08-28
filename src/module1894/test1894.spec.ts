
import { test, expect } from "@playwright/experimental-ct-react";
import App1894 from "./App1894.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1894 />);
  await expect(component).toContainText("Learn React");
});
