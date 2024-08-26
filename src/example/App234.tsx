
import { test, expect } from "@playwright/experimental-ct-react";
import App234 from "./App234.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App234 />);
  await expect(component).toContainText("Learn React");
});
