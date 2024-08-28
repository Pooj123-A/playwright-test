
import { test, expect } from "@playwright/experimental-ct-react";
import App28 from "./App28.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App28 />);
  await expect(component).toContainText("Learn React");
});
