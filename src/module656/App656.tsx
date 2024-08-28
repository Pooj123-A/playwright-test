
import { test, expect } from "@playwright/experimental-ct-react";
import App656 from "./App656.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App656 />);
  await expect(component).toContainText("Learn React");
});
