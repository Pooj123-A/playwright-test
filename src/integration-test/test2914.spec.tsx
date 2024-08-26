
import { test, expect } from "@playwright/experimental-ct-react";
import App2914 from "../example/App2914.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2914 />);
  await expect(component).toContainText("Learn React");
});
