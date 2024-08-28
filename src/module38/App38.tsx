
import { test, expect } from "@playwright/experimental-ct-react";
import App38 from "./App38.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App38 />);
  await expect(component).toContainText("Learn React");
});
