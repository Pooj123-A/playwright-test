
import { test, expect } from "@playwright/experimental-ct-react";
import App243 from "./App243.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App243 />);
  await expect(component).toContainText("Learn React");
});
