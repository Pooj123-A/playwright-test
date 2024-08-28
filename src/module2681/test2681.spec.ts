
import { test, expect } from "@playwright/experimental-ct-react";
import App2681 from "./App2681.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2681 />);
  await expect(component).toContainText("Learn React");
});
