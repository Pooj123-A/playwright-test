
import { test, expect } from "@playwright/experimental-ct-react";
import App2076 from "./App2076.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2076 />);
  await expect(component).toContainText("Learn React");
});
