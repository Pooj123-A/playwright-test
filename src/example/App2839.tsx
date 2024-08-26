
import { test, expect } from "@playwright/experimental-ct-react";
import App2839 from "./App2839.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2839 />);
  await expect(component).toContainText("Learn React");
});
