
import { test, expect } from "@playwright/experimental-ct-react";
import App371 from "./App371.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App371 />);
  await expect(component).toContainText("Learn React");
});
