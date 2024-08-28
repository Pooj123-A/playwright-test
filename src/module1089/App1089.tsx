
import { test, expect } from "@playwright/experimental-ct-react";
import App1089 from "./App1089.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1089 />);
  await expect(component).toContainText("Learn React");
});
