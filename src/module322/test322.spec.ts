
import { test, expect } from "@playwright/experimental-ct-react";
import App322 from "./App322.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App322 />);
  await expect(component).toContainText("Learn React");
});
