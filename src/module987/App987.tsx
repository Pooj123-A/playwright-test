
import { test, expect } from "@playwright/experimental-ct-react";
import App987 from "./App987.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App987 />);
  await expect(component).toContainText("Learn React");
});
