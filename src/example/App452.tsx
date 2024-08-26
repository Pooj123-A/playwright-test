
import { test, expect } from "@playwright/experimental-ct-react";
import App452 from "./App452.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App452 />);
  await expect(component).toContainText("Learn React");
});
