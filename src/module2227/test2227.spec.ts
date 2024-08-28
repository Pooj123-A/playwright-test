
import { test, expect } from "@playwright/experimental-ct-react";
import App2227 from "./App2227.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2227 />);
  await expect(component).toContainText("Learn React");
});
