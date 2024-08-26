
import { test, expect } from "@playwright/experimental-ct-react";
import App546 from "../example/App546.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App546 />);
  await expect(component).toContainText("Learn React");
});
