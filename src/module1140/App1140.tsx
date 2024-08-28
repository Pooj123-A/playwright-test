
import { test, expect } from "@playwright/experimental-ct-react";
import App1140 from "./App1140.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1140 />);
  await expect(component).toContainText("Learn React");
});
