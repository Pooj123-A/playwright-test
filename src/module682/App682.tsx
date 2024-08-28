
import { test, expect } from "@playwright/experimental-ct-react";
import App682 from "./App682.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App682 />);
  await expect(component).toContainText("Learn React");
});
