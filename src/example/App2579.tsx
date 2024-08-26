
import { test, expect } from "@playwright/experimental-ct-react";
import App2579 from "./App2579.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2579 />);
  await expect(component).toContainText("Learn React");
});
