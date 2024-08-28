
import { test, expect } from "@playwright/experimental-ct-react";
import App502 from "./App502.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App502 />);
  await expect(component).toContainText("Learn React");
});
