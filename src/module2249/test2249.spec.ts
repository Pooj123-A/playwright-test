
import { test, expect } from "@playwright/experimental-ct-react";
import App2249 from "./App2249.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2249 />);
  await expect(component).toContainText("Learn React");
});
