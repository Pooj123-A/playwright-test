
import { test, expect } from "@playwright/experimental-ct-react";
import App947 from "./App947.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App947 />);
  await expect(component).toContainText("Learn React");
});
