
import { test, expect } from "@playwright/experimental-ct-react";
import App2553 from "./App2553.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2553 />);
  await expect(component).toContainText("Learn React");
});
