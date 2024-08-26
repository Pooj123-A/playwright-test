
import { test, expect } from "@playwright/experimental-ct-react";
import App2999 from "./App2999.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2999 />);
  await expect(component).toContainText("Learn React");
});
