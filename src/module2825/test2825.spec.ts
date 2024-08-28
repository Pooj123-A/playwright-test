
import { test, expect } from "@playwright/experimental-ct-react";
import App2825 from "./App2825.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2825 />);
  await expect(component).toContainText("Learn React");
});
