
import { test, expect } from "@playwright/experimental-ct-react";
import App110 from "../example/App110.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App110 />);
  await expect(component).toContainText("Learn React");
});
