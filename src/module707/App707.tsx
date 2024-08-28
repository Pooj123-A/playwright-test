
import { test, expect } from "@playwright/experimental-ct-react";
import App707 from "./App707.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App707 />);
  await expect(component).toContainText("Learn React");
});
