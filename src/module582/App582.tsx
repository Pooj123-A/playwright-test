
import { test, expect } from "@playwright/experimental-ct-react";
import App582 from "./App582.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App582 />);
  await expect(component).toContainText("Learn React");
});
