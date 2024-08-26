
import { test, expect } from "@playwright/experimental-ct-react";
import App2481 from "../example/App2481.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2481 />);
  await expect(component).toContainText("Learn React");
});