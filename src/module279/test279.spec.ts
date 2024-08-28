
import { test, expect } from "@playwright/experimental-ct-react";
import App279 from "./App279.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App279 />);
  await expect(component).toContainText("Learn React");
});
