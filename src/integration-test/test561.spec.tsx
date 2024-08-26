
import { test, expect } from "@playwright/experimental-ct-react";
import App561 from "../example/App561.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App561 />);
  await expect(component).toContainText("Learn React");
});
