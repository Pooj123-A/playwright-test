
import { test, expect } from "@playwright/experimental-ct-react";
import App139 from "./App139.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App139 />);
  await expect(component).toContainText("Learn React");
});
