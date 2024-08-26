
import { test, expect } from "@playwright/experimental-ct-react";
import App108 from "./App108.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App108 />);
  await expect(component).toContainText("Learn React");
});
