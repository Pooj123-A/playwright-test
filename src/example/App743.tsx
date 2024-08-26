
import { test, expect } from "@playwright/experimental-ct-react";
import App743 from "./App743.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App743 />);
  await expect(component).toContainText("Learn React");
});
