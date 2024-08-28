
import { test, expect } from "@playwright/experimental-ct-react";
import App2601 from "./App2601.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2601 />);
  await expect(component).toContainText("Learn React");
});
