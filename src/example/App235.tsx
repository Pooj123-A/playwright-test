
import { test, expect } from "@playwright/experimental-ct-react";
import App235 from "./App235.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App235 />);
  await expect(component).toContainText("Learn React");
});
