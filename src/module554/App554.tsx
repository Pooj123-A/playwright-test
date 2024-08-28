
import { test, expect } from "@playwright/experimental-ct-react";
import App554 from "./App554.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App554 />);
  await expect(component).toContainText("Learn React");
});
