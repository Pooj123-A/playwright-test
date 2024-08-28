
import { test, expect } from "@playwright/experimental-ct-react";
import App2506 from "./App2506.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2506 />);
  await expect(component).toContainText("Learn React");
});
