
import { test, expect } from "@playwright/experimental-ct-react";
import App678 from "./App678.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App678 />);
  await expect(component).toContainText("Learn React");
});
