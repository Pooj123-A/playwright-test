
import { test, expect } from "@playwright/experimental-ct-react";
import App815 from "./App815.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App815 />);
  await expect(component).toContainText("Learn React");
});
