
import { test, expect } from "@playwright/experimental-ct-react";
import App362 from "./App362.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App362 />);
  await expect(component).toContainText("Learn React");
});
