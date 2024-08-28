
import { test, expect } from "@playwright/experimental-ct-react";
import App1943 from "./App1943.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1943 />);
  await expect(component).toContainText("Learn React");
});
