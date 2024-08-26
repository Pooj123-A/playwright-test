
import { test, expect } from "@playwright/experimental-ct-react";
import App2153 from "../example/App2153.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2153 />);
  await expect(component).toContainText("Learn React");
});
