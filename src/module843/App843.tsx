
import { test, expect } from "@playwright/experimental-ct-react";
import App843 from "./App843.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App843 />);
  await expect(component).toContainText("Learn React");
});
