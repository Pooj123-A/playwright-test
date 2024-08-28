
import { test, expect } from "@playwright/experimental-ct-react";
import App1051 from "./App1051.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1051 />);
  await expect(component).toContainText("Learn React");
});
