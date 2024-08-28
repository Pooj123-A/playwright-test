
import { test, expect } from "@playwright/experimental-ct-react";
import App2456 from "./App2456.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2456 />);
  await expect(component).toContainText("Learn React");
});
