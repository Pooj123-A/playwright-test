
import { test, expect } from "@playwright/experimental-ct-react";
import App2925 from "./App2925.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2925 />);
  await expect(component).toContainText("Learn React");
});
