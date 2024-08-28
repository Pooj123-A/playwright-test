
import { test, expect } from "@playwright/experimental-ct-react";
import App2258 from "./App2258.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2258 />);
  await expect(component).toContainText("Learn React");
});
