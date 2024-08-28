
import { test, expect } from "@playwright/experimental-ct-react";
import App148 from "./App148.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App148 />);
  await expect(component).toContainText("Learn React");
});
