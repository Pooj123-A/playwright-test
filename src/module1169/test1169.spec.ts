
import { test, expect } from "@playwright/experimental-ct-react";
import App1169 from "./App1169.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1169 />);
  await expect(component).toContainText("Learn React");
});
