
import { test, expect } from "@playwright/experimental-ct-react";
import App1415 from "./App1415.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1415 />);
  await expect(component).toContainText("Learn React");
});
