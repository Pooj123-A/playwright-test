
import { test, expect } from "@playwright/experimental-ct-react";
import App1886 from "./App1886.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1886 />);
  await expect(component).toContainText("Learn React");
});
