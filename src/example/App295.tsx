
import { test, expect } from "@playwright/experimental-ct-react";
import App295 from "./App295.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App295 />);
  await expect(component).toContainText("Learn React");
});
