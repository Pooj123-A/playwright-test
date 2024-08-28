
import { test, expect } from "@playwright/experimental-ct-react";
import App2114 from "./App2114.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2114 />);
  await expect(component).toContainText("Learn React");
});
