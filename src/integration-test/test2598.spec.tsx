
import { test, expect } from "@playwright/experimental-ct-react";
import App2598 from "../example/App2598.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2598 />);
  await expect(component).toContainText("Learn React");
});
