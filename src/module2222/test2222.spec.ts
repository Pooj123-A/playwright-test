
import { test, expect } from "@playwright/experimental-ct-react";
import App2222 from "./App2222.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2222 />);
  await expect(component).toContainText("Learn React");
});
