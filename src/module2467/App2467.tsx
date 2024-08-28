
import { test, expect } from "@playwright/experimental-ct-react";
import App2467 from "./App2467.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2467 />);
  await expect(component).toContainText("Learn React");
});
