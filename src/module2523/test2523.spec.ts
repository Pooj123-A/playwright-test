
import { test, expect } from "@playwright/experimental-ct-react";
import App2523 from "./App2523.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2523 />);
  await expect(component).toContainText("Learn React");
});
