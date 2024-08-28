
import { test, expect } from "@playwright/experimental-ct-react";
import App258 from "./App258.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App258 />);
  await expect(component).toContainText("Learn React");
});
