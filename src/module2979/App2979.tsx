
import { test, expect } from "@playwright/experimental-ct-react";
import App2979 from "./App2979.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2979 />);
  await expect(component).toContainText("Learn React");
});
