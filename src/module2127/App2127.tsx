
import { test, expect } from "@playwright/experimental-ct-react";
import App2127 from "./App2127.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2127 />);
  await expect(component).toContainText("Learn React");
});
