
import { test, expect } from "@playwright/experimental-ct-react";
import App1074 from "./App1074.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1074 />);
  await expect(component).toContainText("Learn React");
});
