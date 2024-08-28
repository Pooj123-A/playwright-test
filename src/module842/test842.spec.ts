
import { test, expect } from "@playwright/experimental-ct-react";
import App842 from "./App842.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App842 />);
  await expect(component).toContainText("Learn React");
});
