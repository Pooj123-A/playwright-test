
import { test, expect } from "@playwright/experimental-ct-react";
import App1059 from "./App1059.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1059 />);
  await expect(component).toContainText("Learn React");
});
