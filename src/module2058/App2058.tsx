
import { test, expect } from "@playwright/experimental-ct-react";
import App2058 from "./App2058.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2058 />);
  await expect(component).toContainText("Learn React");
});
