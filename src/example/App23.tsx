
import { test, expect } from "@playwright/experimental-ct-react";
import App23 from "./App23.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App23 />);
  await expect(component).toContainText("Learn React");
});
