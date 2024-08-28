
import { test, expect } from "@playwright/experimental-ct-react";
import App1263 from "./App1263.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1263 />);
  await expect(component).toContainText("Learn React");
});
