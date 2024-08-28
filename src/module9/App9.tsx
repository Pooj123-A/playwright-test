
import { test, expect } from "@playwright/experimental-ct-react";
import App9 from "./App9.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App9 />);
  await expect(component).toContainText("Learn React");
});
