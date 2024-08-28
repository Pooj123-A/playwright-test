
import { test, expect } from "@playwright/experimental-ct-react";
import App847 from "./App847.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App847 />);
  await expect(component).toContainText("Learn React");
});
