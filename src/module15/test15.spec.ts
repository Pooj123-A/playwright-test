
import { test, expect } from "@playwright/experimental-ct-react";
import App15 from "./App15.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App15 />);
  await expect(component).toContainText("Learn React");
});
