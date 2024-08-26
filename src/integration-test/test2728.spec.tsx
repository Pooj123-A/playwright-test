
import { test, expect } from "@playwright/experimental-ct-react";
import App2728 from "../example/App2728.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2728 />);
  await expect(component).toContainText("Learn React");
});
