
import { test, expect } from "@playwright/experimental-ct-react";
import App44 from "./App44.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App44 />);
  await expect(component).toContainText("Learn React");
});
