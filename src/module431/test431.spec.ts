
import { test, expect } from "@playwright/experimental-ct-react";
import App431 from "./App431.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App431 />);
  await expect(component).toContainText("Learn React");
});
