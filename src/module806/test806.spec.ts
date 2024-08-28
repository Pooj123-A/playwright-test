
import { test, expect } from "@playwright/experimental-ct-react";
import App806 from "./App806.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App806 />);
  await expect(component).toContainText("Learn React");
});
