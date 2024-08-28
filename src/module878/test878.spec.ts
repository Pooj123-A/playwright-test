
import { test, expect } from "@playwright/experimental-ct-react";
import App878 from "./App878.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App878 />);
  await expect(component).toContainText("Learn React");
});
