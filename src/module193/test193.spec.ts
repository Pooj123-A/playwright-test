
import { test, expect } from "@playwright/experimental-ct-react";
import App193 from "./App193.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App193 />);
  await expect(component).toContainText("Learn React");
});
