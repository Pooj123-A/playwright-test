
import { test, expect } from "@playwright/experimental-ct-react";
import App531 from "./App531.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App531 />);
  await expect(component).toContainText("Learn React");
});
