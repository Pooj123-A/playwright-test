
import { test, expect } from "@playwright/experimental-ct-react";
import App1902 from "./App1902.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1902 />);
  await expect(component).toContainText("Learn React");
});
