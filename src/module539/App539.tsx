
import { test, expect } from "@playwright/experimental-ct-react";
import App539 from "./App539.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App539 />);
  await expect(component).toContainText("Learn React");
});
