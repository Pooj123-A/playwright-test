
import { test, expect } from "@playwright/experimental-ct-react";
import App2203 from "./App2203.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2203 />);
  await expect(component).toContainText("Learn React");
});
