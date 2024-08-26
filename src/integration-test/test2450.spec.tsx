
import { test, expect } from "@playwright/experimental-ct-react";
import App2450 from "../example/App2450.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2450 />);
  await expect(component).toContainText("Learn React");
});
