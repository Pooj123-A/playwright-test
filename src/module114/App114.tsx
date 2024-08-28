
import { test, expect } from "@playwright/experimental-ct-react";
import App114 from "./App114.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App114 />);
  await expect(component).toContainText("Learn React");
});
