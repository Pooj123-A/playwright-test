
import { test, expect } from "@playwright/experimental-ct-react";
import App2735 from "./App2735.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2735 />);
  await expect(component).toContainText("Learn React");
});
