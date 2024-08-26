
import { test, expect } from "@playwright/experimental-ct-react";
import App94 from "./App94.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App94 />);
  await expect(component).toContainText("Learn React");
});
