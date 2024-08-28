
import { test, expect } from "@playwright/experimental-ct-react";
import App1889 from "./App1889.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1889 />);
  await expect(component).toContainText("Learn React");
});
