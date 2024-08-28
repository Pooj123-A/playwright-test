
import { test, expect } from "@playwright/experimental-ct-react";
import App2949 from "./App2949.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2949 />);
  await expect(component).toContainText("Learn React");
});
