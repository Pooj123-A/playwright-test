
import { test, expect } from "@playwright/experimental-ct-react";
import App810 from "./App810.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App810 />);
  await expect(component).toContainText("Learn React");
});
