
import { test, expect } from "@playwright/experimental-ct-react";
import App2287 from "./App2287.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2287 />);
  await expect(component).toContainText("Learn React");
});
