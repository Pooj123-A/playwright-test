
import { test, expect } from "@playwright/experimental-ct-react";
import App118 from "./App118.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App118 />);
  await expect(component).toContainText("Learn React");
});
