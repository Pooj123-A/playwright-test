
import { test, expect } from "@playwright/experimental-ct-react";
import App913 from "./App913.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App913 />);
  await expect(component).toContainText("Learn React");
});
