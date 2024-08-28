
import { test, expect } from "@playwright/experimental-ct-react";
import App81 from "./App81.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App81 />);
  await expect(component).toContainText("Learn React");
});
