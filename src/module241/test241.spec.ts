
import { test, expect } from "@playwright/experimental-ct-react";
import App241 from "./App241.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App241 />);
  await expect(component).toContainText("Learn React");
});
