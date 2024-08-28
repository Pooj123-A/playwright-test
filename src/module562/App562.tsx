
import { test, expect } from "@playwright/experimental-ct-react";
import App562 from "./App562.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App562 />);
  await expect(component).toContainText("Learn React");
});
