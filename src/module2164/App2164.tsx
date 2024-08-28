
import { test, expect } from "@playwright/experimental-ct-react";
import App2164 from "./App2164.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2164 />);
  await expect(component).toContainText("Learn React");
});
