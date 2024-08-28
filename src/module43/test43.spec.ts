
import { test, expect } from "@playwright/experimental-ct-react";
import App43 from "./App43.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App43 />);
  await expect(component).toContainText("Learn React");
});
