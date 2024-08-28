
import { test, expect } from "@playwright/experimental-ct-react";
import App513 from "./App513.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App513 />);
  await expect(component).toContainText("Learn React");
});
