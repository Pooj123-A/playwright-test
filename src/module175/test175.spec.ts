
import { test, expect } from "@playwright/experimental-ct-react";
import App175 from "./App175.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App175 />);
  await expect(component).toContainText("Learn React");
});
