
import { test, expect } from "@playwright/experimental-ct-react";
import App584 from "./App584.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App584 />);
  await expect(component).toContainText("Learn React");
});
