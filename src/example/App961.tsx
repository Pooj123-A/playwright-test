
import { test, expect } from "@playwright/experimental-ct-react";
import App961 from "./App961.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App961 />);
  await expect(component).toContainText("Learn React");
});
