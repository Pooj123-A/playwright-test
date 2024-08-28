
import { test, expect } from "@playwright/experimental-ct-react";
import App797 from "./App797.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App797 />);
  await expect(component).toContainText("Learn React");
});
