
import { test, expect } from "@playwright/experimental-ct-react";
import App786 from "./App786.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App786 />);
  await expect(component).toContainText("Learn React");
});
