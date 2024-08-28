
import { test, expect } from "@playwright/experimental-ct-react";
import App281 from "./App281.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App281 />);
  await expect(component).toContainText("Learn React");
});
