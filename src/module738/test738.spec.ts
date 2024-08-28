
import { test, expect } from "@playwright/experimental-ct-react";
import App738 from "./App738.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App738 />);
  await expect(component).toContainText("Learn React");
});
