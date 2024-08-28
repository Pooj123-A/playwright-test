
import { test, expect } from "@playwright/experimental-ct-react";
import App1053 from "./App1053.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1053 />);
  await expect(component).toContainText("Learn React");
});
