
import { test, expect } from "@playwright/experimental-ct-react";
import App86 from "./App86.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App86 />);
  await expect(component).toContainText("Learn React");
});
