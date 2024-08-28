
import { test, expect } from "@playwright/experimental-ct-react";
import App894 from "./App894.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App894 />);
  await expect(component).toContainText("Learn React");
});
