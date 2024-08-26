
import { test, expect } from "@playwright/experimental-ct-react";
import App2108 from "../example/App2108.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2108 />);
  await expect(component).toContainText("Learn React");
});
