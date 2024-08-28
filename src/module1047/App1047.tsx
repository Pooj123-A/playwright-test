
import { test, expect } from "@playwright/experimental-ct-react";
import App1047 from "./App1047.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1047 />);
  await expect(component).toContainText("Learn React");
});
