
import { test, expect } from "@playwright/experimental-ct-react";
import App1937 from "./App1937.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1937 />);
  await expect(component).toContainText("Learn React");
});
