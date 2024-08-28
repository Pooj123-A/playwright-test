
import { test, expect } from "@playwright/experimental-ct-react";
import App783 from "./App783.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App783 />);
  await expect(component).toContainText("Learn React");
});
