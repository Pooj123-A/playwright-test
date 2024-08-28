
import { test, expect } from "@playwright/experimental-ct-react";
import App615 from "./App615.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App615 />);
  await expect(component).toContainText("Learn React");
});
