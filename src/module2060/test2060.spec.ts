
import { test, expect } from "@playwright/experimental-ct-react";
import App2060 from "./App2060.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2060 />);
  await expect(component).toContainText("Learn React");
});
