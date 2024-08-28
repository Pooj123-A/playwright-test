
import { test, expect } from "@playwright/experimental-ct-react";
import App2826 from "./App2826.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2826 />);
  await expect(component).toContainText("Learn React");
});
