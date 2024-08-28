
import { test, expect } from "@playwright/experimental-ct-react";
import App388 from "./App388.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App388 />);
  await expect(component).toContainText("Learn React");
});
