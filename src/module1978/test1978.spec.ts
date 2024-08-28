
import { test, expect } from "@playwright/experimental-ct-react";
import App1978 from "./App1978.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1978 />);
  await expect(component).toContainText("Learn React");
});
