
import { test, expect } from "@playwright/experimental-ct-react";
import App52 from "./App52.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App52 />);
  await expect(component).toContainText("Learn React");
});
