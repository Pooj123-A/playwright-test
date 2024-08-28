
import { test, expect } from "@playwright/experimental-ct-react";
import App209 from "./App209.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App209 />);
  await expect(component).toContainText("Learn React");
});
