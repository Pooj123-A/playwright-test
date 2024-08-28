
import { test, expect } from "@playwright/experimental-ct-react";
import App2923 from "./App2923.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2923 />);
  await expect(component).toContainText("Learn React");
});
