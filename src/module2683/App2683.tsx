
import { test, expect } from "@playwright/experimental-ct-react";
import App2683 from "./App2683.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2683 />);
  await expect(component).toContainText("Learn React");
});
