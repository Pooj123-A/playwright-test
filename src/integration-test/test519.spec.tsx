
import { test, expect } from "@playwright/experimental-ct-react";
import App519 from "../example/App519.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App519 />);
  await expect(component).toContainText("Learn React");
});
