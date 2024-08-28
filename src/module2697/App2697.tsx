
import { test, expect } from "@playwright/experimental-ct-react";
import App2697 from "./App2697.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2697 />);
  await expect(component).toContainText("Learn React");
});
