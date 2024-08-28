
import { test, expect } from "@playwright/experimental-ct-react";
import App1095 from "./App1095.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1095 />);
  await expect(component).toContainText("Learn React");
});
