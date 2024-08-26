
import { test, expect } from "@playwright/experimental-ct-react";
import App886 from "./App886.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App886 />);
  await expect(component).toContainText("Learn React");
});
