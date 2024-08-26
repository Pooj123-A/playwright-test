
import { test, expect } from "@playwright/experimental-ct-react";
import App685 from "./App685.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App685 />);
  await expect(component).toContainText("Learn React");
});
