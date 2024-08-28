
import { test, expect } from "@playwright/experimental-ct-react";
import App1058 from "./App1058.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1058 />);
  await expect(component).toContainText("Learn React");
});
