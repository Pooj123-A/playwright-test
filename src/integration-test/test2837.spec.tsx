
import { test, expect } from "@playwright/experimental-ct-react";
import App2837 from "../example/App2837.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2837 />);
  await expect(component).toContainText("Learn React");
});
