
import { test, expect } from "@playwright/experimental-ct-react";
import App186 from "./App186.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App186 />);
  await expect(component).toContainText("Learn React");
});
