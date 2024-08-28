
import { test, expect } from "@playwright/experimental-ct-react";
import App1235 from "./App1235.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1235 />);
  await expect(component).toContainText("Learn React");
});
