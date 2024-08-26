
import { test, expect } from "@playwright/experimental-ct-react";
import App2293 from "../example/App2293.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2293 />);
  await expect(component).toContainText("Learn React");
});
