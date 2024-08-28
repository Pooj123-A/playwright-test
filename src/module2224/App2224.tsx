
import { test, expect } from "@playwright/experimental-ct-react";
import App2224 from "./App2224.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2224 />);
  await expect(component).toContainText("Learn React");
});
