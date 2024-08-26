
import { test, expect } from "@playwright/experimental-ct-react";
import App2252 from "./App2252.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2252 />);
  await expect(component).toContainText("Learn React");
});
