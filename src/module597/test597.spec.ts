
import { test, expect } from "@playwright/experimental-ct-react";
import App597 from "./App597.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App597 />);
  await expect(component).toContainText("Learn React");
});
