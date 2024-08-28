
import { test, expect } from "@playwright/experimental-ct-react";
import App1421 from "./App1421.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1421 />);
  await expect(component).toContainText("Learn React");
});
