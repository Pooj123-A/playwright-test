
import { test, expect } from "@playwright/experimental-ct-react";
import App2358 from "./App2358.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2358 />);
  await expect(component).toContainText("Learn React");
});
