
import { test, expect } from "@playwright/experimental-ct-react";
import App379 from "./App379.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App379 />);
  await expect(component).toContainText("Learn React");
});
