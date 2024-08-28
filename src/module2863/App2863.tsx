
import { test, expect } from "@playwright/experimental-ct-react";
import App2863 from "./App2863.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2863 />);
  await expect(component).toContainText("Learn React");
});
