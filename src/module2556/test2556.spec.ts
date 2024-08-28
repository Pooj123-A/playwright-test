
import { test, expect } from "@playwright/experimental-ct-react";
import App2556 from "./App2556.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2556 />);
  await expect(component).toContainText("Learn React");
});
