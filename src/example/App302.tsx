
import { test, expect } from "@playwright/experimental-ct-react";
import App302 from "./App302.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App302 />);
  await expect(component).toContainText("Learn React");
});
