
import { test, expect } from "@playwright/experimental-ct-react";
import App157 from "./App157.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App157 />);
  await expect(component).toContainText("Learn React");
});
