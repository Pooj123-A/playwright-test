
import { test, expect } from "@playwright/experimental-ct-react";
import App748 from "./App748.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App748 />);
  await expect(component).toContainText("Learn React");
});
