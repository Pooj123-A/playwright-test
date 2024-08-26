
import { test, expect } from "@playwright/experimental-ct-react";
import App2091 from "./App2091.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2091 />);
  await expect(component).toContainText("Learn React");
});
