
import { test, expect } from "@playwright/experimental-ct-react";
import App770 from "./App770.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App770 />);
  await expect(component).toContainText("Learn React");
});
