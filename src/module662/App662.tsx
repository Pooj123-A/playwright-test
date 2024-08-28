
import { test, expect } from "@playwright/experimental-ct-react";
import App662 from "./App662.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App662 />);
  await expect(component).toContainText("Learn React");
});
