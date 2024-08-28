
import { test, expect } from "@playwright/experimental-ct-react";
import App1752 from "./App1752.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1752 />);
  await expect(component).toContainText("Learn React");
});
