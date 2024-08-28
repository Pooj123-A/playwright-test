
import { test, expect } from "@playwright/experimental-ct-react";
import App2307 from "./App2307.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2307 />);
  await expect(component).toContainText("Learn React");
});
