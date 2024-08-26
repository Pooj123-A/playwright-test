
import { test, expect } from "@playwright/experimental-ct-react";
import App123 from "./App123.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App123 />);
  await expect(component).toContainText("Learn React");
});
