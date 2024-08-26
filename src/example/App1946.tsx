
import { test, expect } from "@playwright/experimental-ct-react";
import App1946 from "./App1946.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1946 />);
  await expect(component).toContainText("Learn React");
});
