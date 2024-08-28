
import { test, expect } from "@playwright/experimental-ct-react";
import App2950 from "./App2950.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2950 />);
  await expect(component).toContainText("Learn React");
});
