
import { test, expect } from "@playwright/experimental-ct-react";
import App29 from "./App29.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App29 />);
  await expect(component).toContainText("Learn React");
});
