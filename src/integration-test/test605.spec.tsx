
import { test, expect } from "@playwright/experimental-ct-react";
import App605 from "../example/App605.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App605 />);
  await expect(component).toContainText("Learn React");
});
