
import { test, expect } from "@playwright/experimental-ct-react";
import App37 from "./App37.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App37 />);
  await expect(component).toContainText("Learn React");
});
