
import { test, expect } from "@playwright/experimental-ct-react";
import App727 from "./App727.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App727 />);
  await expect(component).toContainText("Learn React");
});
