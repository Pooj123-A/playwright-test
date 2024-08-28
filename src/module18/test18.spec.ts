
import { test, expect } from "@playwright/experimental-ct-react";
import App18 from "./App18.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App18 />);
  await expect(component).toContainText("Learn React");
});
