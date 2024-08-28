
import { test, expect } from "@playwright/experimental-ct-react";
import App1841 from "./App1841.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1841 />);
  await expect(component).toContainText("Learn React");
});
