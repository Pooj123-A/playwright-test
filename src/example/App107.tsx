
import { test, expect } from "@playwright/experimental-ct-react";
import App107 from "./App107.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App107 />);
  await expect(component).toContainText("Learn React");
});
