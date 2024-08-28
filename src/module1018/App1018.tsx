
import { test, expect } from "@playwright/experimental-ct-react";
import App1018 from "./App1018.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1018 />);
  await expect(component).toContainText("Learn React");
});
