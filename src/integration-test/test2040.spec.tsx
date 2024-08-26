
import { test, expect } from "@playwright/experimental-ct-react";
import App2040 from "../example/App2040.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2040 />);
  await expect(component).toContainText("Learn React");
});
