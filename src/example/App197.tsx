
import { test, expect } from "@playwright/experimental-ct-react";
import App197 from "./App197.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App197 />);
  await expect(component).toContainText("Learn React");
});
