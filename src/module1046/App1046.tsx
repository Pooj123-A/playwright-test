
import { test, expect } from "@playwright/experimental-ct-react";
import App1046 from "./App1046.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1046 />);
  await expect(component).toContainText("Learn React");
});
