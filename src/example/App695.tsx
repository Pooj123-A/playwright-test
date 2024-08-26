
import { test, expect } from "@playwright/experimental-ct-react";
import App695 from "./App695.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App695 />);
  await expect(component).toContainText("Learn React");
});
