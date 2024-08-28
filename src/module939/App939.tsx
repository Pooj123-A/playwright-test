
import { test, expect } from "@playwright/experimental-ct-react";
import App939 from "./App939.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App939 />);
  await expect(component).toContainText("Learn React");
});
