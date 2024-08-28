
import { test, expect } from "@playwright/experimental-ct-react";
import App1933 from "./App1933.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1933 />);
  await expect(component).toContainText("Learn React");
});
