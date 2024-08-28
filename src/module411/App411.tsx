
import { test, expect } from "@playwright/experimental-ct-react";
import App411 from "./App411.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App411 />);
  await expect(component).toContainText("Learn React");
});
