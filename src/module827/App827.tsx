
import { test, expect } from "@playwright/experimental-ct-react";
import App827 from "./App827.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App827 />);
  await expect(component).toContainText("Learn React");
});
