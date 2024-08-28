
import { test, expect } from "@playwright/experimental-ct-react";
import App342 from "./App342.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App342 />);
  await expect(component).toContainText("Learn React");
});
