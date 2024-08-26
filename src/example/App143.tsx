
import { test, expect } from "@playwright/experimental-ct-react";
import App143 from "./App143.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App143 />);
  await expect(component).toContainText("Learn React");
});
