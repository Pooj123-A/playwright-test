
import { test, expect } from "@playwright/experimental-ct-react";
import App2301 from "../example/App2301.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2301 />);
  await expect(component).toContainText("Learn React");
});
