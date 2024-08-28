
import { test, expect } from "@playwright/experimental-ct-react";
import App787 from "./App787.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App787 />);
  await expect(component).toContainText("Learn React");
});
