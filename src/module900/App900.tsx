
import { test, expect } from "@playwright/experimental-ct-react";
import App900 from "./App900.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App900 />);
  await expect(component).toContainText("Learn React");
});
