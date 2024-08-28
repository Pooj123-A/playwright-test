
import { test, expect } from "@playwright/experimental-ct-react";
import App2783 from "./App2783.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2783 />);
  await expect(component).toContainText("Learn React");
});
