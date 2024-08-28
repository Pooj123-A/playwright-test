
import { test, expect } from "@playwright/experimental-ct-react";
import App853 from "./App853.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App853 />);
  await expect(component).toContainText("Learn React");
});
