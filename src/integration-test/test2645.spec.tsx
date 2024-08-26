
import { test, expect } from "@playwright/experimental-ct-react";
import App2645 from "../example/App2645.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2645 />);
  await expect(component).toContainText("Learn React");
});
