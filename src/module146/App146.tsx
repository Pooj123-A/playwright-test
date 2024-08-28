
import { test, expect } from "@playwright/experimental-ct-react";
import App146 from "./App146.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App146 />);
  await expect(component).toContainText("Learn React");
});
