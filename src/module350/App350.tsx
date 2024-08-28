
import { test, expect } from "@playwright/experimental-ct-react";
import App350 from "./App350.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App350 />);
  await expect(component).toContainText("Learn React");
});
