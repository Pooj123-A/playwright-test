
import { test, expect } from "@playwright/experimental-ct-react";
import App980 from "./App980.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App980 />);
  await expect(component).toContainText("Learn React");
});
