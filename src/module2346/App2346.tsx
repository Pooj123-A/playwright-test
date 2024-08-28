
import { test, expect } from "@playwright/experimental-ct-react";
import App2346 from "./App2346.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2346 />);
  await expect(component).toContainText("Learn React");
});
