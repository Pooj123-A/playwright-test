
import { test, expect } from "@playwright/experimental-ct-react";
import App166 from "./App166.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App166 />);
  await expect(component).toContainText("Learn React");
});
