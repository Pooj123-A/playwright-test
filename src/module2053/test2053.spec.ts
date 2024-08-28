
import { test, expect } from "@playwright/experimental-ct-react";
import App2053 from "./App2053.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2053 />);
  await expect(component).toContainText("Learn React");
});
