
import { test, expect } from "@playwright/experimental-ct-react";
import App2875 from "./App2875.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2875 />);
  await expect(component).toContainText("Learn React");
});
