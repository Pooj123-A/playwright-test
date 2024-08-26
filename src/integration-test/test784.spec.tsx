
import { test, expect } from "@playwright/experimental-ct-react";
import App784 from "../example/App784.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App784 />);
  await expect(component).toContainText("Learn React");
});
