
import { test, expect } from "@playwright/experimental-ct-react";
import App2953 from "./App2953.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2953 />);
  await expect(component).toContainText("Learn React");
});
