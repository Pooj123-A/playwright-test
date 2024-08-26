
import { test, expect } from "@playwright/experimental-ct-react";
import App340 from "./App340.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App340 />);
  await expect(component).toContainText("Learn React");
});
