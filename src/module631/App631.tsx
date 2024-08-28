
import { test, expect } from "@playwright/experimental-ct-react";
import App631 from "./App631.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App631 />);
  await expect(component).toContainText("Learn React");
});
