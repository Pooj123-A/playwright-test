
import { test, expect } from "@playwright/experimental-ct-react";
import App869 from "./App869.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App869 />);
  await expect(component).toContainText("Learn React");
});
