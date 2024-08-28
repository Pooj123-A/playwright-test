
import { test, expect } from "@playwright/experimental-ct-react";
import App2418 from "./App2418.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2418 />);
  await expect(component).toContainText("Learn React");
});
