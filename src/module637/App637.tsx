
import { test, expect } from "@playwright/experimental-ct-react";
import App637 from "./App637.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App637 />);
  await expect(component).toContainText("Learn React");
});
