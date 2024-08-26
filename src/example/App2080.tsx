
import { test, expect } from "@playwright/experimental-ct-react";
import App2080 from "./App2080.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2080 />);
  await expect(component).toContainText("Learn React");
});
