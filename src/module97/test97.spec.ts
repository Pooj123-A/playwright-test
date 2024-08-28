
import { test, expect } from "@playwright/experimental-ct-react";
import App97 from "./App97.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App97 />);
  await expect(component).toContainText("Learn React");
});
