
import { test, expect } from "@playwright/experimental-ct-react";
import App171 from "./App171.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App171 />);
  await expect(component).toContainText("Learn React");
});
