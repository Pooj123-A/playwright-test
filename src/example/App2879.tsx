
import { test, expect } from "@playwright/experimental-ct-react";
import App2879 from "./App2879.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2879 />);
  await expect(component).toContainText("Learn React");
});
