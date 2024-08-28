
import { test, expect } from "@playwright/experimental-ct-react";
import App2984 from "./App2984.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2984 />);
  await expect(component).toContainText("Learn React");
});
