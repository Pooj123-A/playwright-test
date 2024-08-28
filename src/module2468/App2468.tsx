
import { test, expect } from "@playwright/experimental-ct-react";
import App2468 from "./App2468.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2468 />);
  await expect(component).toContainText("Learn React");
});
