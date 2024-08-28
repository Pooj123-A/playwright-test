
import { test, expect } from "@playwright/experimental-ct-react";
import App574 from "./App574.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App574 />);
  await expect(component).toContainText("Learn React");
});
