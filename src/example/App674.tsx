
import { test, expect } from "@playwright/experimental-ct-react";
import App674 from "./App674.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App674 />);
  await expect(component).toContainText("Learn React");
});
