
import { test, expect } from "@playwright/experimental-ct-react";
import App525 from "./App525.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App525 />);
  await expect(component).toContainText("Learn React");
});
