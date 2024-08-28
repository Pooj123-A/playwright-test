
import { test, expect } from "@playwright/experimental-ct-react";
import App751 from "./App751.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App751 />);
  await expect(component).toContainText("Learn React");
});
