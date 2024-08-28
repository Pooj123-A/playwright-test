
import { test, expect } from "@playwright/experimental-ct-react";
import App608 from "./App608.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App608 />);
  await expect(component).toContainText("Learn React");
});
