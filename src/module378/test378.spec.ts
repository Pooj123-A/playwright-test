
import { test, expect } from "@playwright/experimental-ct-react";
import App378 from "./App378.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App378 />);
  await expect(component).toContainText("Learn React");
});
